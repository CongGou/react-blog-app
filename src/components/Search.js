import React, { Component } from "react";
import Nav from "./Nav";
import "./Search.css";
import { connect } from "react-redux";
import timeDateDiff from "../utils/timeDateDiff";

const mapStateToProps = (state) => {
  return {
    searchArticle: state.searchArticle,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // getUser: (User) =>
    //   dispatch({
    //     type: "GET_USER",
    //     User,
    //   }),
  };
};
class Search extends Component {
  async componentDidMount() {}
  handleClick = (id) => {
    if (!id) return alert("该文章已不存在");
    this.props.history.push(`/article/${id}`);
  };
  render() {
    let { searchArticle } = this.props;
    // console.log(this.props);
    let Article = function () {
      return (
        <div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: 80,
              marginBottom: 20,
            }}
          >
            <span style={{ color: "#7B7B7B" }}>
              找到以下
              <strong style={{ color: "#000" }}>{searchArticle.length}</strong>
              张相关文章：
            </span>
          </div>
          {searchArticle.map((item) => (
            <div
              className="card mb-3"
              key={item._id}
              onClick={() => this.handleClick(item._id)}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={item.coverImg} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <small className="text-muted">{item.author.name}</small>
                      <small
                        className="text-muted"
                        style={{
                          marginLeft: 15,
                        }}
                      >
                        {timeDateDiff(item.date)}
                      </small>
                      <small
                        className="text-muted"
                        style={{
                          maxWidth: 60,
                          height: 20,
                          borderRadius: 10,
                          paddingLeft: 10,
                          paddingRight: 10,
                          marginLeft: 15,
                          background: "#D4DFE8",
                        }}
                      >
                        {item.label}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
    return (
      <div>
        <Nav history={this.props.history} />
        {searchArticle[0]._id === "" ? (
          <div className="ShowBox">
            <div style={{ height: 100, overflow: "hidden" }}>
              <img
                className="searchGif"
                src={require("../image/955-search.gif")}
              />
            </div>

            <p>请先输入您要查找的内容</p>
          </div>
        ) : (
          Article()
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
