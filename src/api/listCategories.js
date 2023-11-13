import axiosClient from "./axiosClient";

const listCategories= {
    get(){
        const url = '/category?pageNo=0&pageSize=3'
        return axiosClient.get(url);
    }
};

export default listCategories;