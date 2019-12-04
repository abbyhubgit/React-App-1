import React from 'react'

const date = new Date()
const hour = date.getHours()  
let message 

if(hour < 12){
    if(hour < 5){
      message = "Good night!  you should get some zzzz" 
    }else{
      message = "Good morning! you should be working"
    }
  }else{
    if(hour < 18){
      message = "Good afternoon ! time for some coffee";
    }else{
      message = "Good evening! time for some coding"
    }
  }
function Plans(){
    return(
        <h1>{message}</h1>
    )
}


  export default Plans