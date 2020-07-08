import React, { Component } from "react";
import "./Author.css";
class Author extends Component {
  render() {
    let { AllUsers } = this.props;
    return (
      <div className="Author">
        <p>🎖️作者榜</p>
        <ul>
          {AllUsers.map((item) => (
            <li
              key={item._id}
              onClick={() => alert("用户资料还没开放！敬请期待~")}
            >
              <p>
                <img src={item.photo} alt="" />
                <a>
                  <span className="AuthorName">{item.name}</span>
                  <span>{item.position}</span>
                </a>
              </p>
            </li>
          ))}
        </ul>
        <p
          className="CompleteList"
          onClick={() => alert("该功能还没更新！敬请期待~")}
        >
          完整榜单 >>
        </p>
      </div>
    );
  }
}
export default Author;
