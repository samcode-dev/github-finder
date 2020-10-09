import React from "react";

const Useritem = (props) => {
  const { login, avatar_url, html_url } = props.user;
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
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

export default Useritem;
