import React from "react";
import Jokes from "./Jokes"

 function App(){
    return(
        <div>
        <Jokes 
            setup = "I got my daughter a fridge for her birthday."
            Punchline = "I can't wait to see her face light up when she opens it."
        />
        <Jokes 
            setup = "How did the hacker escape the police?"
            Punchline = "He just ransomware!"
        />
        <Jokes
            setup = "Why don't pirates travel on mountain roads?"
            Punchline= "Scurvy."
        />
        <Jokes 
            setup = "Why do bees stay in the hive in the winter?"
            Punchline = "Swarm."
        />
        <Jokes
            setup = "What's the best thing about Switzerland?"
            Punchline = "I don't know, but the flag is a big plus!"
         />
        
        <Jokes 
            single= "I don't know her"
        />
        </div>
    )
}
export default App