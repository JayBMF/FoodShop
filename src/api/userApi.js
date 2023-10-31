import axiosClient from "./axiosClient";

const userApi = {
    get(data){
        const url = '/admin/get-users';
        return axiosClient.get(url, data);
    }
};

export default userApi;