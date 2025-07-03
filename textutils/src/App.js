import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode , setMode]=useState('light');//Weather dark or light
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = `rgb(14,18,27)`;
    }
    else{
      setMode("light");
      document.body.style.backgroundColor =`white`;
    }
  }
  // document.body.getElementById("line").style.color=`white`;
  // document.body.getElementById("line").style.height=`3px`;
  // document.body.getElementById("line").style.width=`100vw`;
  return (
    <>
      <Navbar title="TEXTUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}  />
      <div className="line" id="line"></div>
      <div className="container my-3">
        <TextForm heading="Enter Your Text here To Analyze⏬👇" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
