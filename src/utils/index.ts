import { toDoItemGenerator } from '../components/index';
import { toDoList } from '../doms/index';
import {
  InsertToDoInterface,
  ToDoInterface,
  UpdateScreenInterface,
} from '../interfaces/index';

export const insertToDo = (params: InsertToDoInterface): void => {
  const { input, localJson } = params;
  localJson.push({
    timestamps: new Date().getTime(),
    todo: input.value,
  });
  localStorage.setItem('latihan_todo', JSON.stringify(localJson));
  input.value = '';
};

export const deleteButton = (): void => {
  const toDoDeleteButton = document.querySelectorAll('.todo-delete')!;
  let newToDo: ToDoInterface[] = [];

  toDoDeleteButton.forEach((element) => {
    let localJson = checkLocalStorage();
    element.addEventListener('click', () => {
      console.log('ok');
      localJson.forEach((item) => {
        if (item.timestamps.toString() !== element.id) {
          newToDo.push({ timestamps: item.timestamps, todo: item.todo });
        }
      });
      localStorage.setItem('latihan_todo', JSON.stringify(newToDo));
      updateScreen({ nodeList: checkLocalStorage(), toDoList });
      deleteButton();
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

export const updateScreen = (params: UpdateScreenInterface): void => {
  const { nodeList, toDoList } = params;
  let toDoItem: string = '';
  nodeList.forEach((item) => {
    toDoItem += toDoItemGenerator(item);
  });
  toDoList.innerHTML = toDoItem;
  localStorage.setItem('latihan_todo', JSON.stringify(nodeList));
};
