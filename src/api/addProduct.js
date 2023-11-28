import axiosAdmin from "./axiosAdmin";

const addProduct = {
    add(data){
        const url= '/products';
        return axiosAdmin.post(url, data, {headers:{
            'Content-Type': 'multipart/form-data',
        }});

    },
};

export default addProduct;