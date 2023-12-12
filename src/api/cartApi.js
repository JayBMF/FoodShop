import axiosClient from "./axiosClient";

const cartAction = {
    add(data){
        const url = '/cart/add-cart';
        return axiosClient.post(url, data);
    },
    getAll(){
        const url = '/user/get-cart';
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/cart/delete-items/${id}`;
        return axiosClient.delete(url);
    },
    updateQuantity(id, quantity){
        const url = `cart/set-quantity/${id}?quantity=${quantity}`;
        return axiosClient.put(url);
    }
};

export default cartAction;