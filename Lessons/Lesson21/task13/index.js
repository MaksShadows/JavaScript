function getSection(num) {
  const elem = document.querySelector(`span[data-number="${num}"]`);
  const item = elem.closest('div');
  const section = item.getAttribute('data-section');

  return section;
};

export { getSection };