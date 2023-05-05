
import React from "react"
export default function Jokes(props){
    return (
        <div>
        
        <h1>{props.setup}</h1>
        <p>{props.Punchline}</p>
        <h1>{props.single}</h1>
        </div>
    )
}