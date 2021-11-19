import { form, input, toDoList } from './doms/index';
import './css/style.css';
import {
  checkLocalStorage,
  deleteButton,
  insertToDo,
  updateScreen,
} from './utils/index';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let localJson = checkLocalStorage();
  insertToDo({ input, localJson });
  localJson = checkLocalStorage();
  updateScreen({ nodeList: localJson, toDoList });
  deleteButton();
});

window.onload = () => {
  const localJson = checkLocalStorage();
  if (localJson.length === 0) {
    toDoList.innerHTML = 'Tambahkan item baru!';
  } else {
    updateScreen({ nodeList: localJson, toDoList });
    deleteButton();
  }
};
