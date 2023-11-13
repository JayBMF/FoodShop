import axiosClient from "./axiosClient";

const identificationApi = {
    get(){
        const url = '/auth/user-info';
        return axiosClient.get(url);
    }
};

export default identificationApi;