function  getTitle() {
  const elem = document.querySelector('.title');
  return elem.textContent;
};

function  getDescription() {
  const elem = document.querySelector('.about');
  return elem.innerText;
};

function getPlans () {
  const elem = document.querySelector('.plans');
  return elem.innerHTML;

};
 
function getGoal () {
  const elem = document.querySelector('.goal');
  return elem.outerHTML;

};
 

export { getTitle, getDescription, getPlans, getGoal };