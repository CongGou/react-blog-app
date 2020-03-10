import React, { Component } from "react";
import { Link } from "react-router-dom";
class Registered extends Component {
  state = {
    ImgUrl: require("../image/background4.jpg")
  };
  render() {
    return (
      <div
        style={{
          background: "#F5F5F5",
          width: "100%",
          height: 750,
          paddingTop: 150
        }}
      >
        <div
          className="text-center"
          style={{ width: 330, height: 460, margin: "auto" }}
        >
          <form className="form-signin">
            <img
              className="mb-4"
              src={this.state.ImgUrl}
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label className="sr-only">用户名</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="用户名"
              required
            />
            <label className="sr-only">密码</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="密码"
              required
              style={{ marginTop: 10 }}
            />
            <label className="sr-only">确认密码</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="确认密码"
              required
              style={{ marginTop: 10 }}
            />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              style={{ marginTop: 30 }}
            >
              注册
            </button>
            <div style={{ flexDirection: "row" }}>
              <Link
                to="/login"
                type="button"
                className="btn btn-link"
                style={{ paddingLeft: 0, marginRight: 25 }}
              >
                已有账号？请登录
              </Link>
              <Link
                to="/"
                type="button"
                className="btn btn-link"
                style={{ marginLeft: 110, paddingRight: 0 }}
              >
                跳过
              </Link>
            </div>
            <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
          </form>
        </div>
      </div>
    );
  }
}
export default Registered;
