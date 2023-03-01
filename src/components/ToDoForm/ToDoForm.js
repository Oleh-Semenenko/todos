import { useState } from 'react';
import { idGenerate } from 'helpers/idGenerate';
import './ToDoForm.css';

export const ToDoForm = ({ todos, addTodo }) => {
  const [emptyTitleInput, setEmptyTitleInput] = useState(false);
  const [emptyDescriptionInput, setEmptyDescriptionInput] = useState(false);
  const inputError = 'This field is empty';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.elements.title.value;
    const description = form.elements.description.value;

    if (title && description) {
      const todo = { id: idGenerate(todos), title, description, status: false };
      addTodo(todo);
      setEmptyTitleInput(false);
      setEmptyDescriptionInput(false);

      form.reset();
    }

    if (!title) {
      setEmptyTitleInput(true);
    }
    if (!description) {
      setEmptyDescriptionInput(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">
        <span>Title</span>
        <input
          className={'input ' + (emptyTitleInput ? 'req' : '')}
          type="text"
          name="title"
          placeholder="Enter title"
        />
        {emptyTitleInput && <div style={{ color: 'red' }}>{inputError}</div>}
      </label>
      <label className="form-label">
        <span>Description</span>
        <input
          className={'input ' + (emptyDescriptionInput ? 'req' : '')}
          type="text"
          name="description"
          placeholder="Enter description"
        />
        {emptyDescriptionInput && (
          <div style={{ color: 'red' }}>{inputError}</div>
        )}
      </label>
      <button className="btn" type="submit">
        Create
      </button>
    </form>
  );
};
