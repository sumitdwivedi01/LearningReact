
import './App.css'
import {useContext , useEffect} from 'react';
import { Routes, Route ,Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';

import { DarkContext } from "./context/Theme/DarkTheme";
function App() {
  
  const {theme} = useContext(DarkContext);

  useEffect(() => {
    if (theme === 'dark') {
    // document.body.style.backgroundImage ="linear-gradient(177.6deg, rgba(20,0,113,1) 15.3%, rgba(1,0,62,1) 91.3%)";
    document.body.style.background="#000B18";

  } else {
     document.body.style.backgroundImage ="linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)";
  }
  }, [theme]);
  return (
    
    <NoteState>
    <>
    <Navbar/>
    <Alert msg={"Note Deleted Sucessfully"}/>

    <div className={`container `}>
    <Routes>
  
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />

      </Routes>      
    </div>
    </>
    </NoteState>
  )
}

export default App
