import React, { useEffect, useState } from "react";
import Dashboard from "./components/admin_dashboard";
import UserRegistration from "./components/admin_users";
import AddUser from "./components/add_user";
import AdminCategories from "./components/admin_categories";
import AddCategory from "./components/add_category";
import AdminProducts from "./components/admin_products";
import AddProduct from "./components/add_product";
import Cookies from "js-cookie";
import identificationApi from "./api/identificationApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { error } from "jquery";
import Error from "./components/Error";
import EditCategory from "./components/edit_category";

function Content(){
    const currentPage = useLocation().pathname;
    const {id} = useParams();
    console.log(currentPage);

    switch(currentPage){
        case('/admin/Dashboard'):
            return <Dashboard/>;
        case('/admin/Registrations'):
            return <UserRegistration/>; 
        case('/admin/Add-User'):
            return <AddUser/>; 
        case('/admin/Categories'):
            return <AdminCategories/>;
        case('/admin/Add-Category'):
            return <AddCategory/>; 
        case('/admin/Products'):
            return <AdminProducts/>; 
        case('/admin/Add-Product'):
            return <AddProduct/>;
        case(`/admin/category/edit/${id}`):
            return <EditCategory/>
        default:
            return <Dashboard/>;
    }
}

function Admin(){
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect (() => {
        const token = Cookies.get('token');
        if (!token){
            navigate('/login');
            return;
        } 
        fetchIdentify().then(data =>{
            if(data === "ADMIN"){
                setIsAdmin(true);
            }else{
                setIsAdmin(false)
            }
        }).catch(error => {
            console.log('Error: ', error);
        });
    },[]);

    const fetchIdentify = async() => {
        try{
            const fetchIdentify = await identificationApi.get();
            return fetchIdentify;
        } catch (error){
            alert("ERROR");
        }
    }


    const handleClick = () => {
        Cookies.remove('token');
        navigate('/Home');
    };
    return(
        <div>
            { isAdmin === false ? <Error/> 
            : 
            <div className="wrapper">
                {/*Main Sidebar Container*/}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <Link to="/admin">
                        <a className="brand-link">
                            <span className="brand-text font-weight-light">FoodShop</span>
                        </a>
                    </Link>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Admin</a>
                            </div>
                            <button className="btn btn-primary" onClick={handleClick}>Log out</button>
                        </div>
                        
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
                                with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/admin">
                                                <a href="./index.html" className="nav-link">
                                                    <i className="far    fa-circle nav-icon" />
                                                    <p>Dashboard</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/admin/Categories">
                                                <a href="./index.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Categories</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/admin/Products">
                                                <a href="./index.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Products</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/admin/Registrations">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Users</p>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    
                {/* /.sidebar */}
                </aside>

                <Content/>
            </div>
        }
        </div>
    );
}

export default Admin;