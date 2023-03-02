import { useState, useRef } from 'react';
import { Modal } from 'components/Modal/Modal';
import './Todo.css';

export const Todo = ({ id, title, description, status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckedTodo, setIsCheckedTodo] = useState(false);
  const [isInputClick, setIsInputClick] = useState(false);

  const checkboxRef = useRef();

  const changeStatus = () => {
    setIsCheckedTodo(!isCheckedTodo);
  };

  const onCheckboxClick = () => {
    if (checkboxRef.current) {
      setIsInputClick(true);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsInputClick(false);
  };

  return (
    <tr>
      <td onClick={openModal}>{id}</td>
      <td onClick={openModal}>{title}</td>
      <td onClick={openModal}>{description}</td>
      <td className="checkbox" ref={checkboxRef} onClick={onCheckboxClick}>
        <input
          type="checkbox"
          checked={isCheckedTodo}
          onChange={changeStatus}
        />
      </td>
      {isModalOpen && !isInputClick && (
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
