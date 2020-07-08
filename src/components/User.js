import React, { Component } from "react";
import "./User.css";
import Author from "./Author";
import { Link } from "react-router-dom";
class User extends Component {
  render() {
    let { User, ManagementArticles, AllUsers } = this.props;
    let id = "";
    if (
      ManagementArticles.length === 0 ||
      ManagementArticles.length === undefined
    ) {
      id = "";
    } else {
      id = ManagementArticles[0]._id;
    }
    return (
      <div className="User">
        <div className="UserData">
          <Link to="/usercenter">
            <img
              src={User.photo || require("../image/default-avatar.e30559a.svg")}
              className="UserPhoto"
              alt=""
            />
            <span className="userName">{User.name || "请先登录"}</span>
          </Link>
        </div>
        <div className="UserLabel">
          <p>
            <Link to="/management">
              <span>文章</span>
              <br />
              <span className="text-muted">
                {id ? ManagementArticles.length : 0}
              </span>
            </Link>
            <a>
              <span>点赞</span>
              <br />
              <span className="text-muted">{User.giveALike}</span>
            </a>
            <a href="#javascript">
              <span>阅读量</span>
              <br />
              <span className="text-muted">{User.reading}</span>
            </a>
          </p>
        </div>
        {/* 作者榜单 */}
        <Author AllUsers={AllUsers} />
      </div>
    );
  }
}
export default User;
