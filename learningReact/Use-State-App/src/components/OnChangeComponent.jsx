import React ,{useState} from 'react'

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange =(event)=>{
        setName(event.target.value);
    }
    const handleQuantityChange =(event)=>{
        setQuantity(event.target.value);
    }
    const handleCommentChange =(event)=>{
        setComment(event.target.value);
    }
    const handlePaymentChange =(event)=>{
        setPayment(event.target.value);
    }
    const handleShippingChange =(event)=>{
        setShipping(event.target.value);
    }

  return (
    <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" min={1}/>
        <p>Quantity: {quantity}</p>

        <textArea valaue={comment} onChange={handleCommentChange} placeholder="Enter Your Comment here!"/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="UPI">UPI</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment:{payment}</p>

        <label>
            <input type="radio" value="Pick Up"
                    checked={shipping==="Pick Up"}
                    onChange={handleShippingChange} />
                    Pick Up
        </label>
        <br />
        <label>
            <input type="radio" value="Delivery"
                    checked={shipping==="Delivery"}
                    onChange={handleShippingChange} />
                    Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
  )
}

export default MyComponent
