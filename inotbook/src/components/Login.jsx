import React ,{useContext , useState}from 'react';
import { DarkContext } from "../context/Theme/DarkTheme";
import {useNavigate} from "react-router-dom"
const Login = () => {
    const navigate = useNavigate();
    const {theme} = useContext(DarkContext);
    const [credentials, setCredentials] = useState({email:"",password:""})
    const handleClickSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login" ,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email:credentials.email , password:credentials.password})

    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        navigate("/");
    }
    else{
        alert("Invalid Credentials");
    }
}
const onChange=(e)=>{
    setCredentials({...credentials ,[e.target.name]:e.target.value })
}
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange}aria-describedby="emailHelp" value={credentials.email} />
                    <div id="emailHelp" className={`form-text text-${theme==='dark'?'light':'dark'}`}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClickSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login;
