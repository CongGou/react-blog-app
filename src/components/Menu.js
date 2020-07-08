import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
class Menu extends Component {
  render() {
    let { isMenu, handleMenu, User, handleLogout, history } = this.props;
    return (
      <div
        className="Menu"
        style={{ display: isMenu ? "block" : "none" }}
        onClick={handleMenu}
      >
        <div className="Menu-list">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                首&nbsp; &nbsp; &nbsp; &nbsp; 页
              </Link>
            </li>
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
            <li
              className="nav-item "
              style={{ display: User._id ? "none" : "block" }}
              onClick={() => history.push("/login")}
            >
              <span className="nav-link">注册登录</span>
            </li>
            <li
              className="nav-item "
              style={{ display: User._id ? "block" : "none" }}
              onClick={handleLogout}
            >
              <span className="nav-link">退出登录</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Menu;
