export interface ToDoInterface {
  timestamps: number;
  todo: string;
}

export interface InsertToDoInterface {
  localJson: ToDoInterface[];
  input: HTMLInputElement;
}

export interface UpdateScreenInterface {
  nodeList: ToDoInterface[];
  toDoList: HTMLDivElement;
}
