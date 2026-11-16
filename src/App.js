import './App.css';
import { useState } from 'react';

function App(){

  const [todos, setTodos] = useState([
    { id: 1, text: 'todo 1' },
    { id: 2, text: 'todo 2' },
    { id: 3, text: 'todo 3' }
  ]);
  return (
    <div>

      <div className="container mt-5 w-50">
        <h1 style={{ textAlign: 'center' }}> TO DO APP</h1>
        <div className="input-group">
          <input  className="form-control" id="text" placeholder="Add a new task" />
          <button className="btn btn-primary" onClick={() => {
            const text = document.getElementById("text").value;
            if (text) {
              setTodos([...todos, { id: todos.length + 1, text }]);
              document.getElementById("text").value = '';
            }
            else{
              alert("Add some task to show in the screen");
            }
          }}>
            Add
          </button>
        </div>
        <ul className="list-group mt-4">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              <p>{todo.text}</p>
              <button className="btn btn-danger" onClick={() => {
                setTodos(todos.filter((t) => t.id !== todo.id));
              }}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;