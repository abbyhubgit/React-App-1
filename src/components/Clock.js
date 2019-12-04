import React from "react"

const date = new Date()
const hour = date.getHours()



function Clock(){
    if(hour<12)
    return(
        <h1>Current time: {hour} AM Central Time (CT)</h1>
    )
    else
    return(
        <h1>Current time: {hour %12} PM Central Time (CT)</h1>
    )

}

export default Clock