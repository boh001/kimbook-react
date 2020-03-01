import SearchPresenter from "./SearchPresenter";
import React from "react";
import queryString from "query-string";
import { apiSearch } from "Components/api";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);

    try {
      const {
        data: { users }
      } = await apiSearch(query.search);
      this.setState({ users });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { users } = this.state;
    return <SearchPresenter users={users} />;
  }
}
