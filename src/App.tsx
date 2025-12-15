import React, { useState, useEffect } from "react";
import Todo from "./Components/Todo/index";
import Counter from "./Components/Todo/Counter";

interface TodoItem {
    id: number;
    title: string;
    completed?: boolean;
}

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
];

function App() {
    const [todos, settodos] = useState<TodoItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => settodos(data as TodoItem[]))
            .catch(err => setError(err.message));
    }, []);

    return (
        <div className="App">
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <Todo items={todos} />
                    <Counter />
                    <Counter />
                </>
            )}
        </div>
    );
}

export default App;