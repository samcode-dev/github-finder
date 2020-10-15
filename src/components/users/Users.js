import React from "react";
import Useritem from "./Useritem";
import Spinner from "../layout/Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return <Useritem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "310px 310px 310px",
  gridGap: "1rem",
};

export default Users;
