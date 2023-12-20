import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from 'react-router-dom';
import listCategories from "../api/listCategories";
import { Box } from "@mui/material";
import {IconButton} from "@mui/material";
import deleteCategory from "../api/deleteCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import orderApi from "../api/orderApi";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';

function AdminOrders(){
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await orderApi.getAll();
            setData(response);
            
        } catch (error) {
            console.error('Error fetching data:', error);
            
        }
    };

    const handleUpdateStatus = async(id, statusOrder) => {
        if (statusOrder === 'Đang xác nhận'){
            try {
                await orderApi.updateStatus(id, 2);
                fetchData();
                toast.success("Update status success");
            } catch (error) {
                console.log(error);
                toast.error("Failed");
            }
        }
        if (statusOrder === 'Đang tiến hàng đóng gói'){
            try {
                await orderApi.updateStatus(id, 3);
                fetchData();
                toast.success("Update status success");
            } catch (error) {
                console.log(error);
                toast.error("Failed");
            }
        }
        if (statusOrder === 'Đang chờ vận chuyển'){
            try {
                await orderApi.updateStatus(id, 4);
                fetchData();
                toast.success("Update status success");
            } catch (error) {
                console.log(error);
                toast.error("Failed");
            }
        }
    };

    const handleCancelOrder = async(id) => {
        try {
            await orderApi.updateStatus(id, 6);
            fetchData();
            toast.success("Cancel order success");
        } catch (error) {
            console.log(error);
            toast.error("Failed");
        }
    };
    
    const formatPayment = (row) => {
        return row.vnPayResponseDTO === null ? 'Chưa thanh toán' : 'Đã thanh toán';
    };

    const formatTotal = (row) => {
        return formattedAmount.format(row.totalPrice);
    };


       
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Tên khách hàng',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'SĐT',
            selector: 'phone',
            sortable: true,
        },
        {
            name: 'Tổng giá',
            selector: 'totalPrice',
            sortable: true,
            cell: row => formatTotal(row),
        },
        {
            name: 'Địa chỉ',
            selector: 'address.address',
            sortable: true,
        },
        {
            name: 'Trạng thái',
            selector: 'statusOrder',
            sortable: true,
        },
        {
            name: 'Thanh toán',
            selector: 'vnPayResponseDTO',
            sortable: true,
            cell: row => formatPayment(row),
        },
        { name: 'Tác vụ', cell: (row) => (
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "70px" }}>
                <IconButton aria-label="check" onClick={() => handleUpdateStatus(row.id, row.statusOrder)}>
                    <CheckBoxIcon sx={{ color: '#228B22' }} />
                </IconButton>
                <IconButton aria-label="cancel" onClick={() => handleCancelOrder(row.id)}>
                    <CancelIcon sx={{ color: 'red' }} />
                </IconButton>
            </Box>
        ), },
    ];
    
    const customStyles = {
        headCells: {
          style: {
            fontWeight: 'bold',
          },
        },
        rows: {
          hover: {
            backgroundColor: 'rgba(236, 236, 236, 0.8)',
          },
        },
     };

    const [currentPage, setCurrentPage] = useState(1);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const paginatedData = data.slice((currentPage - 1) * 10, currentPage * 10);

    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Đơn hàng</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item active">Đơn hàng</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                        <h2 className="card-title"></h2>
                        

                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <DataTable
                                columns={columns}
                                data={data}
                                customStyles={customStyles}
                                pagination
                                paginationTotalRows={data.length}
                                onChangePage={handleChangePage}
                            />
                        </div>
                        
                        {/* /.card-body */}
                    </div>
                    
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>

    );
}

export default AdminOrders;