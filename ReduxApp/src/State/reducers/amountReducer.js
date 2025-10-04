const reducer=(state=0 , amount)=>{
    if(amount.type==='deposit'){
        return state + amount.payload;
    }
    else if(amount.type==='withdraw'){
        return state-amount.payload;
    }
    else{
        return state;
    }
 }

 export default reducer;