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
    postOrder(idAddress, userName, phone, vnpAmount, vnpBankCode, vnpTransactionNo, vnpOrderInfo, vnpSecureHash, vnpPayDate, vnpTxnRef){
        const url = '/order/payment-vnPay';
        console.log(vnpOrderInfo);
        return axiosClient.post(url, {
            addressId: `${idAddress}`,
            name: `${userName}`,
            phone: `${phone}`,
            vnpAmount: `${vnpAmount}`,
            vnpBankCode: `${vnpBankCode}`,
            vnpTransactionNo: `${vnpTransactionNo}`,
            vnpOrderInfo: `${vnpOrderInfo}`,
            vnpSecureHash: `${vnpSecureHash}`,
            vnpPayDate: `${vnpPayDate}`,
            vnpTxnRef: `${vnpTxnRef}`
        });
    },
    getAll(){
        const url = '/orders';
        return axiosAdmin.get(url);
    }
};

export default orderApi;