// useEffect(()=>{})                runs after every Re-render
// useEffect(()=>{} ,[])            runs only on mount
// useEffect(()=>{} ,[value])       runs on mount+when value changes


import React ,{useState , useEffect } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Green");
    
    const addCount=()=>{
        setCount(count+1)
    }
    const subCount=()=>{
        setCount(count-1)
    }
    const changeColor=()=>{
        setColor(color==='Green'?'Red':'Green')
    }
    useEffect(()=>{
        document.title=`Count: ${count} & ${color}`;
        return{
            //Some cleanup code will run on unmounting of component
        }
    }, [count , color]
    )
  return (
    <>
        <p className={`text-center`}>Count: {count}</p>    
        <div className={`text-center`}>
        <button className={`btn btn-${color==='Green'?'success':'danger'} btn-pill m-1 text-center`} onClick={addCount}>Add</button>
        <button className={`btn btn-${color==='Green'?'success':'danger'} btn-pill m-1 text-center`} onClick={subCount}>Subtract</button>
        <br />
        <button onClick={changeColor} className={`btn btn-${color==='Green'?'success':'danger'} btn-pill mx-3 my-2`}>Change Color</button>
        </div>
    </>
  )
}

export default MyComponent;
