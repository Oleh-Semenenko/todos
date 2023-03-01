import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import './Todo.css';

export const Todo = ({ id, title, description, status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckedTodo, setIsCheckedTodo] = useState(false);

  const changeStatus = () => {
    setIsCheckedTodo(!isCheckedTodo);
  };

  return (
    <tr onClick={() => setIsModalOpen(true)}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <input
          type="checkbox"
          checked={isCheckedTodo}
          onChange={changeStatus}
        />
      </td>
      {isModalOpen && (
        <Modal
          changeStatus={changeStatus}
          isCheckedTodo={isCheckedTodo}
          closeModal={setIsModalOpen}
          title={title}
          description={description}
        />
      )}
    </tr>
  );
};
