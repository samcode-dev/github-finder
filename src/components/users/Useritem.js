import React from "react";
import { Link } from "react-router-dom";

const Useritem = (props) => {
  const { login, avatar_url } = props.user;
  const fuserStyle = {
    borderRadius: "50%",
    width: "60px",
  };

  return (
    <div className='card text-center'>
      <img
        style={fuserStyle}
        src={avatar_url}
        alt=''
        // style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

export default Useritem;
