import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { create } from './userSlic';
export const AddUser = () => {

    const userId = useSelector(state => state.user.user.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((preVal) => ({
            ...preVal, [name]: value || ""
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(create({
            id: userId + 1,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        }))
        navigate("/");
    };

    return (
        <div>
            <div>
                <h1>
                    Add User Form List
                </h1>
            </div>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="" label="Firstname" variant="outlined" name="firstname" value={user.firstname || ""} onChange={handleChange} />

                <TextField id="" label="Lastname" variant="outlined" name="lastname" value={user.lastname || ""} onChange={handleChange} />

                <TextField id="" label="Email" variant="outlined" name='email' value={user.email || ""} onChange={handleChange} />

                <NavLink to={"/"}>
                    <Button onClick={handleSubmit} className={"adduser"} variant="contained">Add user</Button>
                </NavLink>
            </Box>
        </div>
    )
}
