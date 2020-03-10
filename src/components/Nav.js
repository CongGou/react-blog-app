import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ height: 60, boxShadow: "0 0 5px #ccc" }}
      >
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/release" className="nav-link">
                发布文章
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/management" className="nav-link">
                管理文章
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/usercenter" className="nav-link">
                个人设置
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              搜索
            </button>

            <Link
              to="/login"
              className="btn btn-outline-secondary"
              style={{ marginLeft: 40 }}
            >
              注册/登录
            </Link>
          </form>
        </div>
      </nav>
    );
  }
}
export default Nav;
