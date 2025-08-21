
import './App.css'
import { Routes, Route ,Link} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import NoteState from './context/notes/NoteState';
function App() {

  return (
    <NoteState>
    <>

    <Navbar/>
    <div className="container">
    <Routes>
  
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

      </Routes>      
    </div>
    </>
    </NoteState>
  )
}

export default App
