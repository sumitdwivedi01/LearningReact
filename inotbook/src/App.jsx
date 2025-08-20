
import './App.css'
import { Routes, Route ,Link} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import NoteState from './components/context/notes/NoteState';
function App() {

  return (
    <NoteState>
    <>

    <Navbar/>
    <h1>this is iNotebook</h1>
    <Routes>
  
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

      </Routes>      
    </>
    </NoteState>
  )
}

export default App
