import React, { Component } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    Comments: state.Comments,
  };
};

class ArticleButton extends Component {
  state = {
    isShow: false,
  };
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return false;
    };
  };
  async componentDidMount() {
    window.addEventListener("scroll", this.Scroll);
  }
  Scroll = () => {
    let scrollTop = window.pageYOffset;
    switch (true) {
      case scrollTop >= 60:
        return this.setState({ isShow: true });
      case scrollTop === 0:
        return this.setState({ isShow: false });
      default:
        return false;
    }
  };
  render() {
    let {
      handleAttention,
      Comments,
      isAttention,
      Article,
      scrollToAnchor,
      history,
    } = this.props;
    let length = Comments.length;
    return (
      <div
        className="ItemListBox"
        style={{ opacity: this.state.isShow ? 1 : 0 }}
      >
        <span className="ListItem" onClick={() => history.push("/home")}>
          <svg
            t="1594133755151"
            className="icon"
            viewBox="0 0 1383 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2096"
            width="30"
            height="30"
          >
            <path
              d="M1214.867064 541.881191c-100.155915-122.259064-288.866043-267.765106-621.578894-280.260085V35.262638c0-13.322894-7.636426-25.817872-19.804596-31.482553s-26.591319-3.965277-36.776851 4.542638l-523.982978 433.130213A34.946723 34.946723 0 0 0 0 468.142298c0 10.490553 4.531745 20.131404 12.451404 26.656681l523.972085 434.851404c10.457872 8.497021 24.619574 10.490553 36.776851 4.531745a34.467404 34.467404 0 0 0 19.804596-31.482554v-225.497872c217.284085 0.838809 549.430468 17.004936 725.700085 328.747575a34.565447 34.565447 0 0 0 30.262468 17.593191c2.83234 0 5.947915-0.294128 8.780256-1.14383A34.554553 34.554553 0 0 0 1383.489362 988.922553c0.283234-116.583489-44.140936-294.999149-168.622298-447.041362z m-656.384 65.797447a34.805106 34.805106 0 0 0-34.794213 34.892256v186.368L89.403915 468.414638l434.56817-359.402212v186.368a34.892255 34.892255 0 0 0 34.238638 34.892255c497.947234 4.814979 683.530894 309.182638 737.574128 523.057021-214.451745-245.356936-535.573787-245.651064-737.301787-245.651064z"
              fill="#707070"
              p-id="2097"
            ></path>
          </svg>
        </span>

        <span className="ListItem" onClick={() => scrollToAnchor("Comments")}>
          <svg
            className="bi bi-chat-dots"
            style={{ color: length === 0 ? "red" : "#6C757D" }}
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
              clipRule="evenodd"
            />
            <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          <span
            className="badge badge-pill badge-primary"
            style={{ position: "absolute" }}
          >
            {length || ""}
          </span>
        </span>
        <span className="ListItem" onClick={handleAttention}>
          <svg
            className="bi bi-heart-fill"
            width="1.5em"
            height="1.5em"
            style={{ paddingTop: 5, color: isAttention ? "red" : "#6C757D" }}
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className="badge badge-pill badge-primary"
            style={{ position: "absolute" }}
          >
            {Article.getLike || ""}
          </span>
        </span>

        <span onClick={() => scrollToAnchor("ArticleNav")} className="ListItem">
          <svg
            t="1594135040760"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11471"
            width="30"
            height="30"
          >
            <path
              d="M477.87008 722.62656V307.2a68.25984 68.25984 0 1 1 136.50944 0v201.32864L799.744 561.50016c36.096 10.33216 59.5968 48.896 52.24448 85.69856L797.10208 921.6H483.7376L293.07904 730.9312a68.23936 68.23936 0 0 1 0-96.53248 68.23936 68.23936 0 0 1 96.53248 0l88.25856 88.22784zM315.47392 112.40448a34.12992 34.12992 0 0 0-48.27136 0l-96.53248 96.53248 36.1984 36.1984 58.85952-58.79808V512h51.2V186.2656l58.86976 58.90048 36.27008-36.23936-96.59392-96.52224z"
              p-id="11472"
              fill="#707070"
            ></path>
          </svg>
        </span>
      </div>
    );
  }
}
export default connect(mapStateToProps)(ArticleButton);
