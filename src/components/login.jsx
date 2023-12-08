import React, {useState, useEffect} from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import loginApi from "../api/loginApi";
import identificationApi from "../api/identificationApi";
import "../css/login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect (() => {
        const token = Cookies.get('token');
        if (token){
            navigate('/Home');
        }
    },[]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const dataLogin = {username, password};
            
            const fetchLogin = await loginApi.add(dataLogin);
            console.log(fetchLogin)
            if (fetchLogin) {
                Cookies.set('token', fetchLogin, {expires: 7});
                const fetchIdentify = await identificationApi.get();
                console.log(fetchIdentify);
                if (fetchIdentify === "ADMIN"){
                    navigate("/admin");
                } else if (fetchIdentify === "USER"){
                    navigate("/Home");
                }
                toast("Login success");
            }else{
                alert("Đăng nhập không thành công");
            }
        } catch (error) {
            alert("Đăng nhập không thành công");
        }

    };
    return(
        <div>
            <section class="login">
                <div class="form-box">
                    <div class="form-value">
                        <form class="login-form" action="">
                            <h2>Login</h2>
                            <div class="inputbox">
                                <ion-icon name="person-outline"></ion-icon>
                                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} required/>
                                <label for="">User name</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <label for="">Password</label>
                            </div>
                            <div class="forget">
                                <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
                            
                            </div>
                            <button class="btn-login" onClick={handleLogin}>Log in</button>
                            <div class="register">
                                <p>Don't have a account <Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login