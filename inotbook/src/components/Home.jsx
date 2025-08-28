import{useContext} from 'react';
import Notes from "./Notes";
import { DarkContext } from "../context/Theme/DarkTheme";
const Home = () => {
  const {theme} = useContext(DarkContext);
  return (
    <div style={{color:`${theme==='dark'?'white':'#0F172A'}`}}>
      <Notes/>
    </div>
  )
}

export default Home
