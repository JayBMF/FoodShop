import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from 'react-router-dom';
import listCategories from "../api/listCategories";
import { Box } from "@mui/material";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import deleteCategory from "../api/deleteCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import orderApi from "../api/orderApi";

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

    
    const formatPayment = (row) => {
        return row.vnPayResponseDTO === null ? 'Unpaid' : 'Paid';
    };

    const formatTotal = (row) => {
        return formattedAmount.format(row);
    };
       
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'phone',
            sortable: true,
        },
        {
            name: 'Total',
            selector: 'totalPrice',
            sortable: true,
        },
        {
            name: 'Address',
            selector: 'address.address',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'statusOrder',
            sortable: true,
        },
        {
            name: 'Payment',
            selector: 'vnPayResponseDTO',
            sortable: true,
            cell: row => formatPayment(row),
        },
        { name: 'Actions', cell: (row) => (
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "70px" }}>
                <button className="btn-success" style={{ borderRadius: '5px'}}>Confirm</button>
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
                    <h1>Orders</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item active">Orders</li>
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
                        <h2 className="card-title">DataTable with orders</h2>
                        

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