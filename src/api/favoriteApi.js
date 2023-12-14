import axiosClient from "./axiosClient";

const favoriteApi = {
    add(idProduct){
        const url = `/user/favourite?idProduct=${idProduct}`;
        return axiosClient.post(url);
    },
    getAll(){
        const url = "/user/favourite";
        return axiosClient.get(url);
    }
};

export default favoriteApi;