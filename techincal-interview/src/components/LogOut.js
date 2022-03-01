import React from 'react';
import { Redirect } from 'react-router-dom';

const LogOut = props => {
    
    localStorage.removeItem("token");

    return <Redirect to='/' />
};

export default LogOut;