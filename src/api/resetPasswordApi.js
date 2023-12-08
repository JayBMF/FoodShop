import axiosClient from "./axiosClient";

const resetPasswordApi = {
  add(username, token, password) {
    const url = `/update-password?username=${username}&tokenForgot=${token}&password=${password}`;
    return axiosClient.post(url);
  },
};

export default resetPasswordApi;