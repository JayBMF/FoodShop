import React, { useEffect, useState } from "react";
import Avatar from "../img/Admin.png"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import profileApi from "../api/profileApi";
import { error } from "jquery";

function AccountSetting(){
    const [isLogin, setIsLogin] = useState (false);
    const navigate = useNavigate();
    useEffect (() => {
        const token = Cookies.get('token');
        if (token){
            setIsLogin(true);
        }
    },[isLogin]) 

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await profileApi();
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleLogOut = () => {
        Cookies.remove('token');
        setIsLogin(false);
        navigate("/Home");
    };
    return(
        <div> 
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="card card-primary card-outline">
                                    <div className="card-body box-profile">
                                       
                                            <div>
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
                                                </div>
                                                <h3 className="profile-username text-center">{data.fullName}</h3>
                                                <p className="text-muted text-center">jay123</p>
                                                <ul className="list-group list-group-unbordered mb-3">
                                                    <li className="list-group-item">
                                                        <b>Email</b> <a className="float-right">{data.email}</a>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <b>Phone</b> <a className="float-right">{data.phone}</a>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <b>Birth day</b> <a className="float-right">{data.birthDate}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        
                                        <a href="#" className="btn btn-primary btn-block"><b>Setting</b></a>
                                        <a href="#" className="btn btn-danger btn-block" onClick={handleLogOut}><b>Log out</b></a>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AccountSetting;