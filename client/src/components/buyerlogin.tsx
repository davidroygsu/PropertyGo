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

export default function BuyerLogin() {

    let userSchema = object({
        email: string().lowercase().required('Email is required.').email('Must be a valid email.'),
        password: string().required('Password is required.'),
    });

    const { register, handleSubmit, formState: { errors }, reset, watch, control } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: { email: "", password: "" },
    });
    const navigate = useNavigate();
    async function onSubmit(e: any) {
        const user = { ...e };

        try {
            const response = await fetch("http://localhost:5000/buyerlogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Credentials do not match');
            }
            // TODO: Add session code
            reset();
            navigate("/buyerdash");
        } catch (error) {
            window.alert(error);
            return;
        }
    }
    return (
        <>
            <body className="text-center calm">
                <div>
                    <h1 className="title">Buyer Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="column">
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
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </div>
                <script type="module" src="./js/main.js"></script>
            </body>
        </>
    );
}
