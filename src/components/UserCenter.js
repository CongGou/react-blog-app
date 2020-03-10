import React, { Component } from "react";
import Nav from "./Nav";
import "./UserCenter.css";
class UserCenter extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="jumbotron jumbotron-fluid">
          <div className="container" style={{ background: "#fff" }}>
            <h5>个人资料</h5>
            <div className="input-group mb-3 ImagePic">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  头像
                </span>
                <img
                  width="80"
                  height="80"
                  src={require("../image/background11.jpg")}
                />
                <input
                  onChange={this._onChange}
                  type="file"
                  accept="image/*"
                  className="form-control-file"
                  ref="input"
                  placeholder="asd"
                />
              </div>
            </div>
            {data.map(item => (
              <div className="input-group mb-3" key={item.title}>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-lg">
                    {item.title}
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="闯森林爱大海"
                  className="form-control"
                />
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginLeft: 10, marginRight: 20 }}
                >
                  修改
                </button>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default UserCenter;
const data = [
  { title: "用户名" },
  { title: "职位" },
  { title: "公司" },
  { title: "个人介绍" },
  { title: "个人主页" }
];
