import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Login extends Component {
  state = {
    ImgUrl: require("../image/WechatIMG1.jpeg"),
    account: {
      userName: "",
      passWord: ""
    }
  };
  handleLogin = async e => {
    e.preventDefault();
    let { userName, passWord } = this.state.account;
    axios.post("/api/login", { name: userName }).then(res => {
      console.log(res);
    });
    // const result = await axios.post("/api/login", {
    //   name: userName
    // });
  };
  onChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account
    });
  };
  render() {
    let { userName, passWord } = this.state.account;
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
          <form className="form-signin" onSubmit={this.handleLogin}>
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
              autoFocus
              defaultValue={userName}
              onChange={this.onChange}
              type="username"
              name="userName"
              id="username"
              className="form-control"
              placeholder="用户名"
              required
            />
            <label className="sr-only">密码</label>
            <input
              type="password"
              defaultValue={passWord}
              onChange={this.onChange}
              id="inputPassword"
              className="form-control"
              placeholder="密码"
              name="passWord"
              required
              style={{ marginTop: 10 }}
            />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              style={{ marginTop: 30 }}
            >
              登录
            </button>
            <div style={{ flexDirection: "row" }}>
              <Link
                to="/registered"
                type="button"
                className="btn btn-link"
                style={{ paddingLeft: 0, marginRight: 10 }}
              >
                还没账号？请先注册
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
export default Login;
