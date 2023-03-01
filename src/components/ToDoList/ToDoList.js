import { Todo } from 'components/Todo/Todo';
import './ToDoList.css';

export const ToDoList = ({ todos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(item => (
          <Todo key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};
