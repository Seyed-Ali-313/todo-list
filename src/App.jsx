import { useReducer, useState } from 'react';
import './App.css';

function App() {
  


  const [todos , setTodos] = useState([]); 
  const [textTodos , setTextTodos] = useState('');
  const [editId , setEditId] = useState(null);
  const [editText , setEditText] = useState('');
  const [error , setError] = useState('');

  const AddTodo = (e) => {
    e.preventDefault(); 

    const trim = textTodos.trim();
    if (!trim) { 
      setError("write anyThing ...");
      return; 
    }

    const newTodo = { 
      id : Date.now(),
      text : trim ,
      status : false
    };

    setTodos((prev) => [...prev , newTodo ]);
    setTextTodos('');
    setError('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const startEdit = (todo) => { 
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    const trim = editText.trim();
    if(!trim) { 
      setError("write anyThing ..."); 
      return;
    }

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editId ? { ...todo, text: trim } : todo
      )
    );
    
    setEditId(null);
    setEditText('');
    setError('');
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText('');
    setError('');
  };

  const toggle = (id) => { setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo)
  );

  };
  return ( 
    <div className="container">

      <h2>Todo List</h2>

      <form className="form" onSubmit={AddTodo}>
        <input 
          className="input"
          type="text" 
          placeholder='write todo name ... '
          value={textTodos}
          onChange={(e) => setTextTodos(e.target.value)}
        />
        <button className="btn add-btn" type='submit'>Add</button>
      </form>
      
      {error && <p className="error">{error}</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            
            {editId === todo.id ? (
              <>
                <input 
                  className="edit-input"
                  type="text" 
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)} 
                />

                <button className="btn save-btn" onClick={saveEdit}>save</button>
                <button className="btn cancel-btn" onClick={cancelEdit}>cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => toggle(todo.id)}>👍</button>
                <span className={`todo-text ${todo.status ? "active" : ""}`}>{todo.text}</span>


                <button className="btn edit-btn" onClick={() => startEdit(todo)}>Edit</button>
                <button className="btn delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}

          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty">No Todo Work ...</p>}

    </div>
  );
}

export default App;
