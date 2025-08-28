import React ,{useContext , useState}from 'react';
import { DarkContext } from "../context/Theme/DarkTheme";
const SignUp = () => {
    const {theme} = useContext(DarkContext);
    const [credentials, setCredentials] = useState({name:"",email:"",password:"" ,cpassword:""})
    const handleClickSubmit= async(e)=>{
      e.preventDefault();
      const {name , email , password}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser" ,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({ name ,email ,password })

    });
    const json = await response.json();
    console.log(json);
    
}
const onChange=(e)=>{
    setCredentials({...credentials ,[e.target.name]:e.target.value })
}


  return (
    <div className="container">
      <form>
                <div className="mb-3">
                    <label htmlFor="name" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} p />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className={`form-text text-${theme==='dark'?'light':'dark'}`}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClickSubmit} >Get Started</button>
            </form>
    </div>
  )
}

export default SignUp
