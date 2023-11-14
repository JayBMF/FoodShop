import React from "react";
import { Link } from "react-router-dom";

function Dashboard(){
    return(
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                
                    <section className="content">
                        <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>150</h3>
                                            <p>New Orders</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                                        <p>Categories</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-android-apps" />
                                    </div>
                                    <a href="#" className="small-box-footer"><Link to="/admin/Categories">More info <i className="fas fa-arrow-circle-right" /></Link></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>Products</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-ios-nutrition" />
                                    </div>
                                    <a href="#" className="small-box-footer"><Link to="/admin/Products">More info <i className="fas fa-arrow-circle-right" /></Link></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-5">
                                    {/* small box */}
                                    <div className="small-box bg-danger">
                                        <div className="inner">
                                            <h3>65</h3>
                                            <p>UUser Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                        <a href="admin/Registrations" className="small-box-footer"><Link to="/admin/Registrations">More info <i className="fas fa-arrow-circle-right" /></Link></a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </section>
                </div>
    );
}


export default Dashboard;