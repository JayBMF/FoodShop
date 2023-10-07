import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login(){
    return(
        <div>
            <section class="login">
                <div class="form-box">
                    <div class="form-value">
                        <form class="login-form" action="">
                            <h2>Login</h2>
                            <div class="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="email" required/>
                                <label for="">Email</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" required/>
                                <label for="">Password</label>
                            </div>
                            <div class="forget">
                                <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
                            
                            </div>
                            <button class="btn-login">Log in</button>
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