import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
class Card extends Component {
  state = {};
  handleClick = e => {};
  handleFous = e => {};
  render() {
    let classeds = "badge badge-";
    let FormTag = tag => {
      return tag === "JavaScript"
        ? classeds + "primary"
        : tag === "Nodejs"
        ? classeds + "secondary"
        : tag === "Vue"
        ? classeds + "success"
        : tag === "React"
        ? classeds + "info"
        : classeds + "warning";
    };
    return (
      <div className="row">
        {data.map(item => (
          <div
            className="col-md-4"
            key={item.id}
            style={{ position: "relative" }}
          >
            <div className="card mb-4 shadow-sm" onClick={this.handleClick}>
              <Link className="card mb-4 shadow-sm Reading" to="/article">
                点击阅读
              </Link>
              <div style={{ width: "100%", height: 255, overflow: "hidden" }}>
                <span
                  style={{ position: "absolute" }}
                  className={FormTag(item.tag)}
                >
                  {item.tag}
                </span>
                <img
                  src={item.ImgUrl}
                  className="card-img-top articleImg"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <span
                      className="nav-link disabled"
                      href="#"
                      aria-disabled="true"
                      style={{ paddingLeft: 0 }}
                    >
                      点赞：{12}
                    </span>
                    <span
                      className="nav-link disabled"
                      href="#"
                      aria-disabled="true"
                    >
                      阅读：{12}
                    </span>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Card;
const data = [
  { id: 1, ImgUrl: require("../image/background4.jpg"), tag: "前端" },
  { id: 2, ImgUrl: require("../image/background5.jpg"), tag: "后端" },
  { id: 3, ImgUrl: require("../image/background6.jpg"), tag: "RactNative" },
  { id: 4, ImgUrl: require("../image/background7.jpg"), tag: "Nodejs" },
  { id: 5, ImgUrl: require("../image/background8.jpg"), tag: "Vue" },
  { id: 6, ImgUrl: require("../image/background9.jpg"), tag: "Vue" },
  { id: 7, ImgUrl: require("../image/background10.jpg"), tag: "JavaScript" },
  { id: 8, ImgUrl: require("../image/background11.jpg"), tag: "React" }
];
