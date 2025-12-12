import React from "react";
import Todo from "./Components/Todo/index";


const myTodoItems = [
    {
        id: 1,
        title: "need to eat food"
    },
    {
        id: 2,
        title: "need to run again"
    },
    {
        id: 3,
        title: "to do coding for project"
    } 

]

const App: React.FC =(props)=>{
    return(
        <div>
        <Todo items={myTodoItems}/>
        </div>
    );
}


export default App;