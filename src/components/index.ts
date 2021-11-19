import { ToDoInterface } from '../interfaces/index';

export const toDoItemGenerator = (item: ToDoInterface) => {
  return `<div class="todo-item-wrapper">
  <p class="todo-item">
    ${item.todo}
  </p>
  <button class="btn btn-danger todo-delete" id="${item.timestamps}">Delete</button>
</div>`;
};
