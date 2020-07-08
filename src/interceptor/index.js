import storgeUtils from "../utils/storgeUtils";
import { Verification } from "../axios";

const interceptor = async (history) => {
  const result = storgeUtils.getUser();
  if (result._id === undefined) {
    alert("您还没登录请先登录");
    history.push("/login");
  }
};

export default interceptor;
