import React from 'react';
import { useEffect , useContext } from "react";
import NoteContext from './context/notes/NoteContext';
const About = () => {
    const a = useContext(NoteContext);
    useEffect(() => {
        a.update();
    }, [])
    
  return (
    <div>
      i am {a.state.name} and my partner name is {a.state.partner}
    </div>
  )
}

export default About
