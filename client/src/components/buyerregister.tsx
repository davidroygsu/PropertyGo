import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";
import { TextField, Button } from "@mui/material";
// Import our custom CSS
import '../scss/styles.scss';

export default function BuyerRegister() {

    let userSchema = object({
        username: string().lowercase().required('Username is required.'),
        fName: string().required('First name is required.'),
        lName: string().required('Last name is required.'),
        email: string().lowercase().required('Email is required.').email('Must be a valid email.'),
        password: string().required('Password is required.'),
        confirmPassword: string().required('Password confirmation is required.').test(
            'passwords-match',
            'Passwords must match',
            function (value) {
                return value === this.parent.password;
            }
        ),
        userType: string().required(),
    });

    const { register, handleSubmit, formState: { errors }, reset, watch, control } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: { username: "", fName: "", lName: "", email: "", password: "", confirmPassword: "", userType: "buyer"}
    });
    const navigate = useNavigate();
    async function onSubmit(e: any) {

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...e };

        await fetch("http://localhost:5000/user/add", {
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

        reset()
        navigate("/");
    }

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <title>Wi-Find Buyer | Register </title>
            </head>
            <body className="text-center calm">
                <div>
                    <h1>Buyer Registration</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="column">
                        <Controller
                            name="fName"
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    name="fName"
                                    label="First Name"
                                    error={Boolean(errors.fName)}
                                    helperText={errors.fName?.message}
                                />}
                        />
                        <Controller
                            name="lName"
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    name="lName"
                                    label="Last Name"
                                    error={Boolean(errors.lName)}
                                    helperText={errors.lName?.message}
                                />}
                        />
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    name="username"
                                    label="Username"
                                    error={Boolean(errors.username)}
                                    helperText={errors.username?.message}
                                />}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    name="email"
                                    label="Email"
                                    error={Boolean(errors.email)}
                                    helperText={errors.email?.message}
                                />}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    name="password"
                                    label="Password"
                                    error={Boolean(errors.password)}
                                    helperText={errors.password?.message}
                                />}
                        />
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    error={Boolean(errors.confirmPassword)}
                                    helperText={errors.confirmPassword?.message}
                                />}
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </div>
                <script type="module" src="./js/main.js"></script>
            </body>
        </>
    );
}

