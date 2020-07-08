export default {
  saveUser: function(userInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  },
  getUser: function(userInfo) {
    return JSON.parse(localStorage.getItem("userInfo") || "{}");
  },
  removeUser: function(userInfo) {
    localStorage.removeItem("userInfo");
  }
};
