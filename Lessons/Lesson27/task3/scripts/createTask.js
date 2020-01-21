import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

function onCreateTask() {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) return;

  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
      text,
      done: false,
      createDate: new Date().toISOString(),
      id: Date.now(),
  });

  setItem('tasksList', newTasksList);
  renderTasks();
  taskTitleInputElem.value = '';
};


export { onCreateTask };