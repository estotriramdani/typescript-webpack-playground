import { ToDoInterface } from '../interfaces/index';

export const deleteButton = (): void => {
  const toDoDeleteButton = document.querySelectorAll('.todo-delete')!;
  toDoDeleteButton.forEach((element) => {
    element.addEventListener('click', () => {
      alert('ok' + element.id);
    });
  });
};

export const checkLocalStorage = (): ToDoInterface[] => {
  if (!localStorage.getItem('latihan_todo')) {
    localStorage.setItem('latihan_todo', '[]');
  }
  const local = localStorage.getItem('latihan_todo')!;
  const localJson: ToDoInterface[] = JSON.parse(local);
  return localJson;
};
