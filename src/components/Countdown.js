import React from 'react'

function Countdown(){

    const christmas = new Date(2019, 12, 25)
    const date = new Date()
    const countdown = christmas.getDate() - date.getDate()
    let countdownMessage 

    //inline style1 
    const style1 = {
        color:"#CC0000", 
        backgroundColor :"#4C9900"
    }  

    if(countdown > 0){
        countdownMessage = "Only " + countdown + " days till christmas"
    }else if(countdown == 0){
        countdownMessage = "Merry Christmas!"
    }else{
        countdownMessage = "Countdown expired"
    }

    
    return(
        
        <div>
            <h1 style = {style1}>{countdownMessage}</h1>
        </div>
    )
        
}


export default Countdown