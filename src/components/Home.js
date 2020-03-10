import React, { Component } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
// import PopularArticles from "./PopularArticles";
import Nav from "./Nav";
import Footer from "./Footer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    User: state.User
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

class Home extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Nav />
        <div className="container">
          <NavBar />
          {/* <PopularArticles /> */}
          <Card />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
