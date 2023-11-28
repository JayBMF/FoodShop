import axiosClient from "./axiosClient";

const listCategories= {
    get(){
        const url = '/categories';
        return axiosClient.get(url);
    },
    getById(id){
        const url = `/category/${id}`;
        return axiosClient.get(url, id);
    }
};

export default listCategories;