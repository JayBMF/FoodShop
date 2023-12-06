import axiosClient from "./axiosClient";

const listPoducts= {
    get(){
        const url = '/products';
        return axiosClient.get(url);
    },
    delete(id){
        const url = `/admin/products/${id}`;
        return axiosClient.delete(url);
    },
    getById(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    update(id, data){
        const url = `/admin/products/${id}`;
        return axiosClient.put(url, data, {headers:{
            'Content-Type': 'multipart/form-data',
        }});
    }
};

export default listPoducts;