import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
// Import our custom CSS
import '../scss/styles.scss';
import { useNavigate } from "react-router";

export default function BuyerRegister() {
    const [form, setForm] = useState({
        username: "",
        fName: "",
        lName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

    // These methods will update the state properties.
    function updateForm(value: { username?: string; fName?: string; lName?: string; email?: string; password?: string; }) {
        return setForm((prev: any) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ username: "", fName: "", lName: "", email: "", password: "" });
        navigate("/");
    }

    return (
        <html lang="en">

            <head>
                <meta charSet="UTF-8" />
                <title>Wi-Find Buyer | Register </title>
            </head>

            <body className="text-center">
                <main className="form-signin w-100 m-auto">
                    <h1 className="h3 mb-3 fw-normal">Wi-Find | Register as a Buyer</h1>
                    <form onSubmit={onSubmit}>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Username</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={form.username}
                                    onChange={(e) => updateForm({ username: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">First Name</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fName"
                                    value={form.fName}
                                    onChange={(e) => updateForm({ fName: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Last Name</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lName"
                                    value={form.lName}
                                    onChange={(e) => updateForm({ lName: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={form.email}
                                    onChange={(e) => updateForm({ email: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={form.password}
                                    onChange={(e) => updateForm({ password: e.target.value })} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Confirm Password</label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="fName"
                                    value={form.password}
                                    onChange={(e) => updateForm({ password: e.target.value })} />
                            </div>
                        </div>



                        <div className="row mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="row">
                            <a href="/buyerlogin"> Already registered?</a>

                        </div>

                    </form>
                    <p className="mt-5 mb-3 text-muted">&copy; Wi-Find | 2023</p>
                </main>

                <script type="module" src="./js/main.js"></script>
            </body>

        </html>
    );
}
