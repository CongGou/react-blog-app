import React, { Component } from "react";
import "./Article.css";
import Nav from "./Nav";
class Article extends Component {
  state = {
    ImgUrl: require("../image/background4.jpg")
  };
  render() {
    return (
      <React.Fragment>
        <Nav />

        <div className="jumbotron jumbotron-fluid Wrap">
          <div className="container Container">
            <div className="media AuthorMessage">
              <img
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                src={this.state.ImgUrl}
                className="align-self-start mr-3"
                alt="..."
              />
              <div style={{ width: 150 }}>
                <span>前端菜鸡的全桟之路</span>
                <span style={{ fontSize: 14, color: "#ccc" }}>
                  2020年03月06日
                </span>
              </div>
              <button
                type="button"
                className="btn btn-outline-warning"
                style={{ position: "absolute", right: 20 }}
              >
                + 关注
              </button>
            </div>
            <div
              data-spy="scroll"
              data-target="#list-example"
              data-offset="0"
              className="scrollspy-example"
            >
              <img
                src={this.state.ImgUrl}
                className="align-self-start mr-3 ArticleCoverImg"
                alt="..."
              />
              <h4 id="list-item-1">你不知道的es5的面向对象</h4>
              <p>
                原型链：当访问某个对象的属性时，如果该对象没有此属性，则会到他的原型中去查找，它的原型属性中又有自己的原型属性，一直这样查找下去，这就构成了原型链（仅代表个人理解，并未找到参考资料）
                原型：对象中固有的__proto__属性，该属性指向对象的prototype原型属性。
                复制代码 原型模式声明：
                优缺点：它的优点不仅能自定义对象类型，更重要的是可以在所有引用类型（Object、Array、String）中创建新方法，虽然也可以修改，但并不推荐。原型中很多实例被共享，对于引用类型值来说问题就比较突出。
              </p>
              <h4 id="list-item-2">你不知道的es5的面向对象</h4>
              <p>
                本文只为自己最近看了很多关于es5对象方面的视频以及书籍，深感前端之路路漫漫其修远兮，才写了此篇博客，也是鄙人第一次写博客，写的不好大家勿怪。另外本文总结的是es5方面的知识点，就不会用到什么let，const以及class之类的es6语法，为了与标题保持一致。我也会在之后总结es6以及typescript方面的知识。还有本文的所有代码都是亲测
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Article;
