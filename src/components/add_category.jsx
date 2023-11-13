import React from "react";
import { Link } from "react-router-dom";

function AddCategory(){
    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add Category</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item">Categories</li>
                        <li className="breadcrumb-item active">Add Category</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    {/* left column */}
                    <div className="col-md-12">
                    {/* jquery validation */}
                    <div className="card card-primary">
                        <div className="card-header">
                        <h3 className="card-title">Add Category Form</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form id="quickForm">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="text" name="Name" className="form-control" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <input type="text" name="Description" className="form-control" placeholder="Enter description" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Image</label>
                                <input type="file" name="Image" className="form-control" />
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </div>
                        </form>
                    </div>
                    {/* /.card */}
                    </div>
                    {/*/.col (left) */}
                    {/* right column */}
                    <div className="col-md-6">
                    </div>
                    {/*/.col (right) */}
                </div>
                {/* /.row */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>
    );
}

export default AddCategory;