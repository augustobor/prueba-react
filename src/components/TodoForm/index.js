import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    
    if(!newTodoValue){
      alert("You can't insert a blank TODO")
    } else {

      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="A new TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
