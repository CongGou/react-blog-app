import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Nav from "./Nav";
import "./Release.css";

class Release extends Component {
  state = {
    data: "",
    isShow: true
  };
  onChange = (event, editor) => {
    const data = editor.getData();
    //   console.log({ data });
    this.setState({
      data
    });
  };
  _onChange = () => {
    let file = this.refs.input.files[0];
    let preview = this.refs.img;
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        preview.src = reader.result;
      },
      false
    );
    if (file) {
      this.setState({
        isShow: false
      });
      reader.readAsDataURL(file);
    }
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="ckeditor">
          <CKEditor
            editor={ClassicEditor}
            onInit={editor => {
              // console.log(editor);
            }}
            onChange={this.onChange}
          />
        </div>
        <div className="TitleWrap">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                文章标题
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="请输入标题（必填）"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                文章标签
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="请输入文章标签（必填:如JavaScript,不区分大小写）"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="Cover">
            <img
              src={require("../asset/icons/image.svg")}
              alt=""
              className={
                this.state.isShow ? "IconImg" : "IconImg IconImgHidden"
              }
            />
            <img ref="img" src="" height="100%" width="100%" alt="" />
          </div>
          <div>
            <input
              onChange={this._onChange}
              type="file"
              accept="image/*"
              className="form-control-file"
              ref="input"
              placeholder="asd"
            />
            <button type="button" className="btn btn-primary">
              发布文章
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Release;
