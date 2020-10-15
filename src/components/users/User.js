import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { MdClear, MdArrowBack } from "react-icons/md";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          <MdArrowBack /> Back to home
        </Link>
        Hireable: {""}
        {hireable ? <FaCheckCircle /> : <MdClear />}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location} </p>
          </div>
          <div>
            {bio ? (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio} </p>
              </Fragment>
            ) : (
              <p>No bio</p>
            )}
            <a href={html_url} target='_blank' className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login ? (
                  <Fragment>
                    <strong>Github Username:</strong> {login}
                  </Fragment>
                ) : (
                  <p>No Username</p>
                )}
              </li>
              <li>
                {company ? (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                ) : (
                  <p>
                    <strong>Company: </strong>Does not have a company
                  </p>
                )}
              </li>
              <li>
                {blog ? (
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                ) : (
                  <p>No Blog</p>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-danger'>Public Gist: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
