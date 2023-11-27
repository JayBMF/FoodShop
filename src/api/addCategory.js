import axiosAdmin from "./axiosAdmin";

const addCategory = {
    add(data){
        const url= '/create-category';
        return axiosAdmin.post(url, data);
    },
};

export default addCategory;