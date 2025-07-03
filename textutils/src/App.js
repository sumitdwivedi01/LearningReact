import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode , setMode]=useState('light');//Weather dark or light
  const [alert, setAlert] = useState(null);
  const showAlert =(message , type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = `rgb(14,18,27)`;
      showAlert("Dark Mode has been enabled" ,"success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor =`white`;
      showAlert("Light Mode has been enabled" ,"success");
    }
  }
  // document.body.getElementById("line").style.color=`white`;
  // document.body.getElementById("line").style.height=`3px`;
  // document.body.getElementById("line").style.width=`100vw`;
  return (
    <>
      <Navbar title="TEXTUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}  />
      <div className="line" id="line"></div>
      <div className="container alertBox">
      <Alert alert={alert} />
      </div>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Your Text here To Analyze⏬👇" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
