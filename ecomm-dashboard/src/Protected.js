import React, { Component ,useState, useEffect}  from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';

function Protected(props)
{
    const navigate = useNavigate();

    let Cmp = props.Cmp
       
    useEffect(() =>{
        if(!localStorage.getItem('user-info')){
            navigate("/register");
        }
    },[])

    return(
        <div>
            <Cmp />
        </div>
    )
}

export default Protected