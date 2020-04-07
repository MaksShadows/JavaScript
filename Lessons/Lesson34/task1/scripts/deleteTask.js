import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { getTasksList, deleteTask } from './tasksGateway.js';


export const  onDeleteTask = e => {
  const deleteBtn = e.target.classList.contains('list-item__delete-btn');
  if (!deleteBtn)
      return;

  const taskId = event.target.parentNode.firstElementChild.dataset.id
      
  
  deleteTask(taskId)
      .then(() => getTasksList())
      .then(newTasksList => {
          setItem('tasksList', newTasksList);
          renderTasks();
      });

};