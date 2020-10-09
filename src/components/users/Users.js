import React, { Component } from "react";
import Useritem from "./Useritem";
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "310px 310px 310px",
  gridGap: "1rem",
};

export default Users;
