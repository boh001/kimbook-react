import SearchPresenter from "./SearchPresenter";
import React from "react";
import queryString from "query-string";
import { apiSearch } from "api";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      myFriends: []
    };
  }
  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);

    try {
      const {
        data: { users, myFriends }
      } = await apiSearch(query.search);
      this.setState({ users, myFriends });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { users, myFriends } = this.state;
    return <SearchPresenter users={users} myFriends={myFriends} />;
  }
}
