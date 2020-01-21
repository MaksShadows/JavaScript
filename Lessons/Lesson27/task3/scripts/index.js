import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    initTodoListHandlers();
});

function onStorageChange(event) {
    if (event.key === 'tasksList') renderTasks();
};

window.addEventListener('storage',onStorageChange);