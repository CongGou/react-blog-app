import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container" style={{ marginTop: 20 }}>
          <p className="float-right">
            <a style={{ color: "#000" }} href="#">
              回到顶部
            </a>
          </p>

          <p>备案号：津ICP备19003971号-1 版权所有：三点鱼</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
