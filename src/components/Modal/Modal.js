import * as ReactDOM from 'react-dom';
import './Modal.css';

export const Modal = ({
  isCheckedTodo,
  changeStatus,
  closeModal,
  title,
  description,
}) => {
  return ReactDOM.createPortal(
    <div className="backdrop">
      <div className="modal">
        <h2 className="title">{title}</h2>
        <div className="description-wrapper">
          <span>Description:</span>
          <p>{description}</p>
        </div>
        <div className="status-wrapper">
          <span>Status:</span>
          <input
            type="checkbox"
            checked={isCheckedTodo}
            onChange={changeStatus}
          />
        </div>
        <button
          type="button"
          onClick={e => {
            closeModal(false);
            e.stopPropagation();
          }}
        >
          Close
        </button>
      </div>
    </div>,
    document.querySelector('#root'),
  );
};
