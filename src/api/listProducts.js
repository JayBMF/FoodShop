import axiosClient from "./axiosClient";

const listPoducts= {
    get(){
        const url = '/products';
        return axiosClient.get(url);
    },
    delete(id){
        const url = `/admin/products/${id}`;
        return axiosClient.delete(url);
    }
};

export default listPoducts;