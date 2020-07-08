import storgeUtils from "./storgeUtils";

export const VerificationLogin = async ({ Verification, history }) => {
  //验证登录状态
  const LoginState = await Verification();

  if (LoginState.data.msg === false) {
    alert("请重新登录");
    history.push("/login");
    storgeUtils.removeUser();
  }
};
