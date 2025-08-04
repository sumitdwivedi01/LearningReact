import React,{useState , useEffect } from 'react'

function MySecondComponent() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize=()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize); 
    console.log("Event Listener Added");
    
      return () => {
        window.removeEventListener("resize", handleResize);
        console.log("Event Listener Removed");
      }
    },[])
    useEffect(() => {
      document.title=`Size : ${width}x${height}`
    
      return () => {
        
      }
    }, [width , height])
    
    

    // window.addEventListener("resize", handleResize); 
    // console.log("Event Listener Added");
    // this is calling thousands of time and everytime new Event listener is getting added so to prevent this we will make a useEffect hook and use it in this place

  return (
    <div>
        <h2>Width: {width}px</h2>
        <h2>Height: {height}px</h2>
      
    </div>
  )
}

export default MySecondComponent;
