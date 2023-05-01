import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
// Import our custom CSS
import '../scss/styles.scss';

export default function BuyerLogin() {
    return (
        <html lang="en">

            <head>
                <title>Wi-Find Buyer | Login</title>
            </head>

            <body className="text-center">
                <main className="form-signin w-100 m-auto">
                    <form>
                        <img className="mb-4" src="https://github.com/davidroygsu/SEstuff/blob/main/wifiangel.png?raw=true" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Wi-Find | Buyer Login</h1>

                        <div className="row mb-3">
                            <label htmlFor="buyerEmail" className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control" id="buyerEmail" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="buyerPassword" className="col-sm-3 col-form-label">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="buyerPassword" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <a href="buyerforgotpassword.html"> Forgot Password</a>
                            </div>
                            <div className="col-sm-6">
                                <a href="buyerregister.html"> Not yet registered?</a>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                    <p className="mt-5 mb-3 text-muted">&copy; Wi-Find | 2023</p>
                </main>
                <script type="module" src="./js/main.js"></script>
            </body>

        </html>
    );
}