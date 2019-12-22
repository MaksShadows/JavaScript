const task = [
  { text: 'Buy milk', done: false, id:1, date: new Date(2010, 9, 1, 0, 0, 0, 0),},
  { text: 'Pick up Tom from airport', done: false, id:2, data: new Date(2011, 6, 1, 0, 0, 0, 0) },
  { text: 'Visit party', done: false, id:3,  date: new Date(2015, 3, 1, 0, 0, 0, 0) },
  { text: 'Visit doctor', done: true, id:4,  date: new Date(2018, 5, 1, 0, 0, 0, 0) },
  { text: 'Buy meat', done: true, id:5,  date: new Date(2019, 8, 1, 0, 0, 0, 0) },
]

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
          listElement.innerHTML = '';

          return listItemElem
      });

  listElement.append(...listItemElements)
}

rederListItem(task);

const btnAddIvent = document.querySelector('.btn-сreate');
btnAddIvent.addEventListener('click',  creatEvent);
const listElement  = document.querySelector('.list')
listElement.addEventListener('click', check);
const taskInput = document.querySelector('.task-input');



const creatEvent = function() {
  const  taskInput = document.querySelector('.task-input')

  if (taskInput.value == '') return;

  task.push({
    id: task.length,
    done: false,
    text: taskInput.value,
    data: new Date()
  });
  taskInput.value = '';
  rederListItem(task);
};
  

const check = function(event) {
  const task = tasks.find(elem => elem.id === +event.target.parentElement.id);
  task.done = event.target.checked;
  rederListItem(task);
}



