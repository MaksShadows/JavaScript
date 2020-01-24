  
import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

function createCheckbox({ done, id }) {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox')
    return checkboxElem;
}

function createListItem({ text, done, id }) {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });
  if (done) listItemElem.classList.add('list__item_done');
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

function renderTasks() {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';
  const tasksElems = tasksList
      .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
      .sort((a, b) => new Date(b.finishDate) - new Date(a.finishDate))
      .sort((a, b) => a.done - b.done)
      .map(createListItem);

  listElem.append(...tasksElems);
};

export { renderTasks };
