import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div
        className="nav-scroller py-1 mb-2"
        style={{ borderBottom: "1px solid #ccc" }}
      >
        <nav className="nav d-flex justify-content-between">
          {Data.map(item => (
            <Link to="/" key={item.title} className="p-2 text-muted" href="#">
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
}
export default NavBar;
const Data = [
  { title: "前端" },
  { title: "后端" },
  { title: "JavaScript" },
  { title: "Vue" },
  { title: "React" },
  { title: "Nodejs" },
  { title: "ReactNative" }
];
