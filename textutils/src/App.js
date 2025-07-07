import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode , setMode]=useState('light');//Weather dark or light or danger or warning or success
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
  const switchMode = (selectedMode)=>{
    const modeColor = (mode === selectedMode) ? 'light' : selectedMode;
      setMode(modeColor);
      console.log("mc"+modeColor);
      console.log(mode);
      setInterval(() => {
        
      }, 2000);
      if (modeColor===`light`) {
        //background 14 18 27
        document.body.style.backgroundColor = `white`;
        showAlert("Light mode has been enabled ✅" ,"success");
        document.title ="Text-Utils/Light Mode";
        
      }
      else if(modeColor===`success`){
        document.body.style.backgroundColor = `#A3D2CA`;
        showAlert("Success mode has been enabled ✅" ,"success");
        document.title ="Text-Utils/Green Mode";
      }
      else if(modeColor===`warning`){
        document.body.style.backgroundColor = `#b59e11`;
        showAlert("Warning mode has been enabled ✅" ,"success");
        document.title ="Text-Utils/Yellow Mode";
      }
      else if(modeColor===`danger`){
        document.body.style.backgroundColor = `#FFC9C9`;
        showAlert("Danger mode has been enabled ✅" ,"success");
        document.title ="Text-Utils/Red Mode";
      }
      else{
        document.body.style.backgroundColor = `rgb(14 , 18 , 27)`;
        showAlert("Dark mode has been enabled ✅" ,"success");
        document.title ="Text-Utils/Dark Mode";
      }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TEXTUtils" aboutText="About TextUtils" mode={mode} switchMode={switchMode}  />
      <div className="line" id="line"></div>
      <div className="container alertBox">
      <Alert alert={alert} />
      </div>
      <div className="container my-3">
          {/* <Routes>
              <Route path="/about" element={<About />}/>
              <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text here To Analyze⏬👇" mode={mode} />}/>
          </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter Your Text here To Analyze⏬👇" mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
