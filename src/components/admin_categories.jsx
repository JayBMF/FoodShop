import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from 'react-router-dom';

function AdminCategories(){
    const data = [
        { name: 'Safari 1.2', engineVersion: '125.5', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        { name: 'Safari 1.3', engineVersion: '312.8', cssGrade: 'A', browser: 'Safari', platform: 'OSX.3' },
        // ...
    ];
       
    const columns = [
        { name: 'Name', selector: 'name', sortable: true },
        { name: 'Engine Version', selector: 'engineVersion', sortable: true },
        { name: 'CSS Grade', selector: 'cssGrade', sortable: true },
        { name: 'Browser', selector: 'browser', sortable: true },
        { name: 'Platform', selector: 'platform', sortable: true },
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
        navigate('/admin/Add-Category');
    };

    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Categories</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item active">Categories</li>
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
                        <h2 className="card-title">DataTable with categories</h2>
                        <div className="card-footer">
                            <button className="btn btn-primary float-right" onClick={handleClick}><ion-icon name="add-outline"></ion-icon>Add Category</button>
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

export default AdminCategories;