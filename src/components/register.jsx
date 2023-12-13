import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import registerApi from "../api/registerApi";
import "../css/login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const isPasswordCorrect = password === confirmPassword;

    const navigate = useNavigate();

    const handleRegister =() => {
        
        if (isPasswordCorrect) {
            try {
                const postData = {
                    "fullName": fullName,
                    "username": userName,
                    "password": password,
                    "phone": phoneNumber,
                    "email": email
                };
                registerApi.add(postData);
                navigate('/login');
                toast.success("Register success!");
            } catch (error) {
                toast.error("Register failed");
            }
        } else{
            toast.error("Password is invalid");
        }
    };

    return(

        <div>
            <section class="login">
                <div class="register-form-box">
                    <div class="form-value">
                        <form class="login-form" action="">
                            <h2>Sign Up</h2>
                            <div class="inputbox">
                                <ion-icon name="person-circle-outline"></ion-icon>
                                <input className="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                                <label for="">Name</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="call-outline"></ion-icon>
                                <input className="phoneNumber" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                                <label for="">Phone Number</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input className="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <label for="">Email</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="person-outline"></ion-icon>
                                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                                <label for="">User name</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input className="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                                <label for="">Password</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input className="confimPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                                <label for="">Confirm Password</label>
                            </div>
                            <button class="btn-login" onClick={handleRegister} >Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register