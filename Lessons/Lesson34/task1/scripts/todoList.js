import {onCreateTask} from './createTask.js';
import {onToggleTask} from './updateTask.js';


export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.btn-сreate');
    createBtnElem.addEventListener('click', onCreateTask);

    const todoListItem = document.querySelector('.list');
    todoListItem.addEventListener('click', onToggleTask);

}