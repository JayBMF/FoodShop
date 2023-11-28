import axiosClient from "./axiosClient";

const listPoducts= {
    get(){
        const url = '/products';
        return axiosClient.get(url);
    }
};

export default listPoducts;