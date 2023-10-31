import axiosClient from "./axiosClient";

const loginApi = {
    add(data){
        const url = '/login';
        return axiosClient.post(url, data);
    }
};

export default loginApi;