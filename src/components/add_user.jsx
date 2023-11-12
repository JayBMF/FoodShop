import React from "react";
import { Link } from "react-router-dom";

function AddUser(){
    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add User</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item">Registrations</li>
                        <li className="breadcrumb-item active">Add User</li>
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
                        <h3 className="card-title">Add User Form</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form id="quickForm">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Full name</label>
                                <input type="text" name="FullName" className="form-control" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Phone number</label>
                                <input type="text" name="PhoneNumber" className="form-control" placeholder="Phone number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">User name</label>
                                <input type="text" name="UserName" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Password" />
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

export default AddUser;