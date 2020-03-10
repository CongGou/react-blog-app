import React, { Component } from "react";

class PopularArticles extends Component {
  state = {
    ImgUrl: require("../image/background12.jpg")
  };
  render() {
    console.log(this.state.ImgUrl);
    return (
      <div
        className="jumbotron p-4 p-md-5 text-white rounded bg-dark"
        style={{ backgroundImage: `url(${this.state.ImgUrl})` }}
      >
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">文章标题</h1>
          <p className="lead my-3">
            文章内容文章内容文章内容文章内容文章内容文章内容 文章内容 文章内容
            文章内容 文章内容 文章内容 文章内容 文章内容
          </p>
          <p className="lead mb-0">
            <a href="#" className="text-white font-weight-bold">
              点击阅读...
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default PopularArticles;
