import React, { Component } from "react";
import storgeUtils from "../utils/storgeUtils";
import axios from "axios";
import timeDateDiff from "../utils/timeDateDiff";
import { connect } from "react-redux";
import { ArticleComments } from "../axios";

const mapStateToProps = (state) => {
  return {
    Comments: state.Comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (Comments) =>
      dispatch({
        type: "GET_COMMENTS",
        Comments,
      }),
  };
};

class Comments extends Component {
  state = {
    comments: "",
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.getComments();
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  //输出评论内容事件
  onChange = (e) => {
    let value = e.currentTarget.value;
    let countComment = { ...this.state.comments };
    countComment = value;
    this.setState({
      comments: countComment,
    });
  };
  //点击评论验证是否登录
  onFocus = async () => {
    const result = await storgeUtils.getUser();
    if (!result._id) {
      alert("您还没登录！请先登录");
      this.props.history.push("/login");
    }
  };
  // 提交评论
  handleEnter = async (e) => {
    e.persist();

    let articleId = this.props.id;
    let userId = this.props.User._id;
    let comments = this.state.comments;

    if (e.which === 13) {
      if (comments === "") return alert("不能发送空白内容");

      const result = await axios.post("/api/comments", {
        articleId,
        userId,
        comments,
      });

      if (result.data.errno === 1) {
        alert(result.data.msg);
        this.setState({
          comments: "",
        });
        await this.getComments();
      }
      //   console.log(result);
    }
  };
  // 获取文章所有评论
  getComments = async () => {
    let articleId = this.props.id;
    const result = await ArticleComments(articleId);

    if (result.data.errno === 1) {
      let commentArr = result.data.data.reverse();
      this.props.getComments(commentArr);
    }
  };

  render() {
    // console.log(this.props.Comments);
    let { Comments } = this.props;
    return (
      <div>
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <h6 id="Comments" style={{ color: "#8C9CAA" }}>
            评论
          </h6>
        </div>
        <div
          style={{
            background: "#FAFBFC",
            height: 60,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <div style={{ display: "inline-block", width: 40 }}>
            <img
              width="40"
              height="40"
              style={{ borderRadius: "50%" }}
              src={
                this.props.User.photo ||
                require("../image/default-avatar.e30559a.svg")
              }
              alt=""
            />
          </div>
          <div
            className="input-group"
            style={{
              display: "inline-block",
              maxWidth: 580,
              float: "right",
            }}
          >
            <input
              style={{
                height: 40,
              }}
              onKeyPress={this.handleEnter}
              value={this.state.comments}
              onChange={this.onChange}
              onFocus={this.onFocus}
              className="form-control"
              aria-label="With textarea"
              placeholder="输入评论....."
            />
          </div>
        </div>
        {Comments.map((item) => (
          <div
            style={{
              width: "100%",
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 15,
              paddingBottom: 15,
            }}
            key={item._id}
          >
            <div className="media" style={{ fontSize: 12 }}>
              <img
                style={{ width: 40, height: 40, borderRadius: "50%" }}
                src={item.author.photo}
                className="mr-3"
                alt="..."
              />
              <div className="media-body">
                <p
                  className="mt-0"
                  style={{ fontSize: 14, display: "block", margin: 0 }}
                >
                  {item.author.name}
                  <span style={{ marginLeft: 20, color: "#8C9CAA" }}>
                    {timeDateDiff(item.date)}
                  </span>
                </p>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
