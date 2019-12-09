const task = [
  { text: 'Buy milk', done: false, id: 0, date: new Date(2010, 9, 1, 0, 0, 0, 0) },
  { text: 'Pick up Tom from airport', done: false, id: 1, date: new Date(2011, 6, 1, 0, 0, 0, 0) },
  { text: 'Visit party', done: false, id: 2, date: new Date(2015, 3, 1, 0, 0, 0, 0) },
  { text: 'Buy meat', done: true, id: 4, date: new Date(2018, 5, 1, 0, 0, 0, 0) },
  { text: 'Visit doctor', done: true, id: 3, date: new Date(2019, 8, 1, 0, 0, 0, 0) },
];


const listElem = document.querySelector('.list');
const btnElem = document.querySelector('.btn');
const inputElem = document.querySelector('.task-input');


const rederListItem = listItem => {
  const listElement = document.querySelector('.list');

  const listItemElements = listItem
      .sort((a, b) => b.date - a.date)
      .sort((a, b) => a.done - b.done)
      .map(({ text, done, id }) => {
          const listItemElem = document.createElement('li')
          listItemElem.classList.add('list__item');
          listItemElem.setAttribute('id', `${id}`);

          const checkboxElem = document.createElement('input');
          checkboxElem.setAttribute('type', 'checkbox')
          checkboxElem.checked = done;
          if (done) listItemElem.classList.add('list__item_done')
          checkboxElem.classList.add('list__item-checkbox')
          listItemElem.append(checkboxElem, text)
          return listItemElem
      });

  listElement.append(...listItemElements)
}


rederListItem(task);

const checkDoneWork = (event) => {
  const checkTarget = event.target;
  if (checkTarget.tagName != 'INPUT') return;

  const getId = todos.find(elem => elem.id === +checkTarget.parentElement.id);
  getId.done = checkTarget.checked;

  listElem.innerHTML = '';
  renderListItems(todos);
};

listElem.addEventListener('click', checkDoneWork);


const creatNewWork = () => {
  if (inputElem.value == '') return;

  todos.unshift({
      id: todos.length + 1,
      text: inputElem.value,
      done: false,
      date: new Date();
  });

  inputElem.value = '';

  listElem.innerHTML = '';
  renderListItems(todos);
};

btnElem.addEventListener('click', creatNewWork);
