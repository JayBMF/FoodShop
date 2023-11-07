import axiosClient from "./axiosClient";


const profileApi = {
    get(){
        const url = '/identification';
        return axiosClient.get(url);
    }
};

export default profileApi;