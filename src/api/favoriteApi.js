import axiosClient from "./axiosClient";

const favoriteApi = {
    add(idProduct){
        const url = `/user/favourite?idProduct=${idProduct}`;
        return axiosClient.post(url);
    },
    getAll(){
        const url = "/user/favourite";
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/user/favourite?idProduct=${id}`;
        return axiosClient.delete(url);
    }
};

export default favoriteApi;