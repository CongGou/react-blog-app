import React, { Component } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

class Management extends Component {
  state = {
    ImgUrl: require("../image/WechatIMG1.jpeg"),
    data: [
      { id: 1, title: "js面向对象", Date: "2020年02月13日" },
      { id: 2, title: "nodejs", Date: "2020年02月13日" },
      { id: 3, title: "reactjs", Date: "2020年02月13日" },
      { id: 4, title: "vue", Date: "2020年02月13日" }
    ]
  };
  handleDelete = id => {
    let data = this.state.data.filter(m => m.id !== id);
    this.setState({
      data
    });
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div
          className="container Container"
          style={{ marginTop: 20, padding: 0 }}
        >
          {this.state.data.map(item => (
            <div className="card text-center" key={item.id}>
              <div className="card-body">
                <span
                  className="badge badge-primary"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    borderRadius: 0,
                    borderTopLeftRadius: 3
                  }}
                >
                  {item.Date}
                </span>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                </p>
                <Link
                  to="/article"
                  className="btn btn-primary"
                  style={{ marginRight: 20 }}
                >
                  查看
                </Link>
                <button
                  onClick={() => this.handleDelete(item.id)}
                  type="button"
                  className="btn btn-danger"
                >
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Management;
