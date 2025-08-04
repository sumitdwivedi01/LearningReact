import React , {useState} from 'react'

function UseStateComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName =()=>{
        setName("Sumit");
    }
    const updateAge =()=>{
        setAge(age+1);
    }
    const DecreaseAge =()=>{
        setAge(age-1);
    }

    const toggleEmployedStatus =()=>{
        setIsEmployed(isEmployed===false?true:false);
    }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Increase Age</button>
      <button onClick={DecreaseAge}>Decrease Age</button>

      <p>IsEmployed: {isEmployed?"Yes":"No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}

export default UseStateComponent
