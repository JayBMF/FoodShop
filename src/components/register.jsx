import React from "react";
import "../css/login.css";

function Register(){
    return(
        <div>
            <section class="login">
                <div class="register-form-box">
                    <div class="form-value">
                        <form class="login-form" action="">
                            <h2>Sign Up</h2>
                            <div class="inputbox">
                                <ion-icon name="person-circle-outline"></ion-icon>
                                <input type="text" required/>
                                <label for="">Name</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="call-outline"></ion-icon>
                                <input type="text" required/>
                                <label for="">Phone Number</label>
                            </div>
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
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" required/>
                                <label for="">Confirm Password</label>
                            </div>
                            <button class="btn-login">Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register