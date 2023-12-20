import axiosClient from "./axiosClient";
import axiosAdmin from "./axiosAdmin";

const orderApi = {
    add(idAddress, userName, phone){
        const url = '/order';
        return axiosClient.post(url, {
            addressId: `${idAddress}`,
            name: `${userName}`,
            phone: `${phone}`
        });
    },
    addOnl(idAddress, userName, phone, totalPrice){
        const url = `/api/payment/pay?totalPrice=${totalPrice}&addressId=${idAddress}&name=${userName}&phone=${phone}`;
        return axiosClient.get(url);
    },
    getAll(){
        const url = '/orders';
        return axiosAdmin.get(url);
    },
    getByUser(){
        const url = '/user/orders';
        return axiosClient.get(url);
    },
    updateStatus(orderId, statusOrderId){
        const url = `order/update-status?orderId=${orderId}&statusOrderId=${statusOrderId}`;
        return axiosAdmin.put(url);
    }
};

export default orderApi;