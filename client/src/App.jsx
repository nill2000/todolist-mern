import { useState, useEffect } from 'react'


function App() {

    const [msg, setMsg] = useState("");

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/todos");
            const todos = await response.json();
            console.log(todos);
            setMsg(todos.message)
        } catch (err){
            console.log(err);
        }

        
    };

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <>
      <main className='container'>
        <h1>Todo app</h1>
        <h2>Message : {msg}</h2>
      </main>
    </>
  )
}

export default App
