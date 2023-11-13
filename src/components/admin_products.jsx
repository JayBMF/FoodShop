import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from 'react-router-dom';

function AdminProducts(){
    const data = [
        { id: '1', name: 'Mì lẩu thái tôm gói 80g', category: 'Mì gói', amount: '50', price:'7000', discount:'5%', description:'description'  },
        // ...
    ];
       
    const columns = [
        { name: 'Id', selector: 'id', sortable: true },
        { name: 'Name', selector: 'name', sortable: true },
        { name: 'Category', selector: 'category', sortable: true },
        { name: 'Amount', selector: 'amount', sortable: true },
        { name: 'Price', selector: 'price', sortable: true },
        { name: 'Discount', selector: 'discount', sortable: true },
        { name: 'Description', selector: 'description', sortable: true },
        { name: 'Status', cell: (row) => (
            <button className="btn btn-success">
                Actived
            </button>
        )},
        { name: 'Actions', cell: (row) => (
            <button className="btn btn-danger">
                Delete
            </button>
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

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin/Add-Product');
    };

    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Products</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item active">Products</li>
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
                        <h2 className="card-title">DataTable with products</h2>
                        <div className="card-footer">
                            <button className="btn btn-primary float-right" onClick={handleClick}><ion-icon name="add-outline"></ion-icon>Add Product</button>
                        </div>

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

export default AdminProducts;