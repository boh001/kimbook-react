import React from "react";
export default class extends React.Component {
  componentWillMount() {
    fetch("/logout", {
      method: "post"
    });
  }
}
