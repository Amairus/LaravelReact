import React, { Component ,useState, useEffect}  from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';

function Login()
{
    const navigate = useNavigate();
    const [email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");

    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            navigate("/add");
        }
    },[])

    async function login(){
        let item  = {email,password};
        let result = await fetch('http://localhost:8000/api/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "Accept": 'application/json'
            },
            body:JSON.stringify(item),
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/add");
    }

    return(
        <div>
            <Header />
            <h1>Login Page</h1>
            <div className='col-sm-6 offset-sm-3'>
                <input type="text" placeholder="email" onChange={(e)=>SetEmail(e.target.value)}  className='form-control'/>
                <input type="password" placeholder="password" onChange={(e)=>SetPassword(e.target.value)} className='form-control'/>
                <button className='btn btn-primary' onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login