import { useReducer, useState } from 'react';
import './App.css';

function App() {

function Reducer  (state , action) { 
  switch(action.type) {
    case "add" :  
      return  [...state , action.payload]; 
    case "delete" :
      return  state.filter((todo)=> todo.id !== action.payload.id )
    case "edit" :
      return  state.map((todo)=> todo.id === action.payload.id ? { ...todo , text : action.payload.text } : todo ) ;   
    case "toggle" :
      return  state.map((todo) => todo.id === action.payload.id ? {...todo , status: !todo.status } : todo );   
  }
}

  const [state , dispatch] = useReducer(Reducer , []); 
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

    dispatch({type: "add" , payload : newTodo})
    setTextTodos('');
    setError('');
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

    dispatch({type : "edit" , payload : {id :editId , text :editText  }})
    ;
    
    setEditId(null);
    setEditText('');
    setError('');
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText('');
    setError('');
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
        {state.map((todo) => (
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
                <button onClick={() => dispatch({type: "toggle" , payload : todo })}>👍</button>
                <span className={`todo-text ${todo.status ? "active" : ""}`}>{todo.text}</span>


                <button className="btn edit-btn" onClick={() => startEdit(todo)}>Edit</button>
                <button className="btn delete-btn" onClick={() => dispatch({type : "delete" , payload : todo})}>Delete</button>
              </>
            )}

          </li>
        ))}
      </ul>

      {state.length === 0 && <p className="empty">No Todo Work ...</p>}

    </div>
  );

};
export default App;
