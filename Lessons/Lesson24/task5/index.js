const tasks = [
  { text: 'Buy milk', done: false, id:1, date: new Date(2010, 9, 1, 0, 0, 0, 0),
  dateDone: null },
  { text: 'Pick up Tom from airport', done: false, id:2, data: new Date(2011, 6, 1, 0, 0, 0, 0),
  dateDone: null },
  { text: 'Visit party', done: false, id:3,  date: new Date(2015, 3, 1, 0, 0, 0, 0),
  dateDone: null },
  { text: 'Visit doctor', done: true, id:4,  date: new Date(2018, 5, 1, 0, 0, 0, 0),
  dateDone: new Date( 2020, 8, 8 ) },
  { text: 'Buy meat', done: true, id:5,  date: new Date(2019, 8, 1, 0, 0, 0, 0),
  dateDone: new Date(2021, 5, 5 ) },
]

const rederListItem = listItem => {
  const listElement = document.querySelector('.list');

  const listItemElements = listItem
      .sort((a, b) => b.date - a.date)
      .sort((a, b) => a.done - b.done)
      .sort((a, b) => a.dateDone - b.dateDone)
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
          listElement.innerHTML = '';

          return listItemElem
      });

  listElement.append(...listItemElements)
}

rederListItem(tasks);

const btnAddIvent = document.querySelector('.btn-сreate');
const listElement  = document.querySelector('.list')
const taskInput = document.querySelector('.task-input');


const check = function(event) {
  const task = tasks.find(elem => elem.id === +event.target.parentElement.id);
  task.done = event.target.checked;
  task.dateDone =  task.done ? new Date() : null;
  rederListItem(tasks);
};

listElement.addEventListener('click', check);

const creatEvent = function() {

  const taskInput = document.querySelector('.task-input');

  if (taskInput.value == '') return;

  tasks.push({
    id: tasks.length,
    done: false,
    text: taskInput.value,
    data: new Date(),
    dateDone: null,
  });
  taskInput.value = '';
  rederListItem(tasks);
};

btnAddIvent.addEventListener('click',  creatEvent);
