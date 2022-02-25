
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Profile from './Profile'

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        grant_type: "password",
        client_id: "2",
        client_secret: "GjUJ5tqVliDdTadQDn4eQYQPUtLKjRLICu0qmrTR",
        scope: "*",
        username: "",
        password: ""
    })

    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        });
        console.log(credentials)
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/oauth/token', credentials)
        .then(res => {//line below might be problematic, security?
            //didnt set up local storage in axiosWithAuth yet
            console.log(res)
            localStorage.setItem('token',res.data.access_token); 
            props.history.push('/Profile')
        })
        .catch(err => console.log('Login Error', err))
    }

    return(
        <>
        <h1>Welcome To Your Wethos Info!</h1>
        
        <form onSubmit={login}>
            <label>Username</label>
            <input
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChange}
            />
            <label>Password</label>
            <input
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
            />
            <button>Log In </button>
        </form>
        </>
    );
};

export default Login;
