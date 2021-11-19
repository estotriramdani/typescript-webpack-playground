import { form, input, toDoList } from './doms/index';
import './css/style.css';
import { toDoItemGenerator } from './components/index';
import { checkLocalStorage, deleteButton } from './utils/index';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const localJson = checkLocalStorage();
  localJson.push({
    timestamps: new Date().getTime(),
    todo: input.value,
  });
  localStorage.setItem('latihan_todo', JSON.stringify(localJson));
  input.value = '';
  let toDoItem: string = '';
  localJson.forEach((item) => {
    toDoItem += toDoItemGenerator(item);
  });
  toDoList.innerHTML = toDoItem;
});

window.onload = () => {
  const localJson = checkLocalStorage();
  if (localJson.length === 0) {
    toDoList.innerHTML = 'Tambahkan item baru!';
  } else {
    let toDoItem: string = '';
    localJson.forEach((item) => {
      toDoItem += toDoItemGenerator(item);
    });
    toDoList.innerHTML = toDoItem;

    deleteButton();
  }
};
