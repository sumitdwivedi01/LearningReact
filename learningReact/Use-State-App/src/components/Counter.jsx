import React ,{useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment =()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

  return (
    <>
    <div className="container" >
        <h3 className={"container text-center my-20"} style={{fontSize:'10em'}}>{count}</h3>
    </div>
    <div className="container d-flex flex-colomn justify-content-evenly align-item-center">
        <button className={"btn btn-pill btn-info mx-3 text-light fw-bold"} onClick={decrement}>Decrement</button>
        <button className={"btn btn-pill btn-info mx-3 text-light fw-bold"} onClick={reset}>Reset</button>
        <button className={"btn btn-pill btn-info mx-3 text-light fw-bold"} onClick={increment}>Increment</button>
    </div>
    </>
  )
}

export default Counter;
