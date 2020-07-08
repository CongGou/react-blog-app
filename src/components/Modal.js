import React, { Component } from "react";
import "./Modal.css";

class Mode extends Component {
  render() {
    let {
      handleCancel,
      handleConfirm,
      sidebarTouchMove,
      isShow,
      title
    } = this.props;
    return (
      <div
        className="ModalWrap"
        style={{ display: isShow ? "block" : "none", position: "fixed" }}
        onTouchMove={sidebarTouchMove}
      >
        <div className="Modal">
          <p className="title">{title}</p>
          <p className="Button">
            <button
              type="button"
              className="btn btn-secondary left"
              onClick={handleCancel}
            >
              取消
            </button>
            <button
              type="button"
              className="btn btn-primary right"
              onClick={handleConfirm}
            >
              确定
            </button>
          </p>
        </div>
      </div>
    );
  }
}
export default Mode;
