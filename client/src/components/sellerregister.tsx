import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
// Import our custom CSS
import '../scss/styles.scss';

export default function SellerRegister() {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>Wi-Find Seller | Register </title>
            </head>
            <body className="text-center calm">
                <main className="form-signin w-100 m-auto">
                    <h1 className="h3 mb-3 fw-normal">Wi-Find | Register as a Seller</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="email" className="form-control" {...register("email", { required: true})}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" {...register("password", { required: true})}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Confirm Password</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" {...register("password", { required: true})}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="row">
                            <NavLink to="/sellerlogin">Already registered?</NavLink>
                        </div>
                    </form>
                    <p className="mt-5 mb-3 text-muted">&copy; Wi-Find | 2023</p>
                </main>
                <script type="module" src="./js/main.js"></script>
            </body>
        </html>
    );
}