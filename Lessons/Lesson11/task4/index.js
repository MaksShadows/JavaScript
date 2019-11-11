const countOccurrences = (str, substr) => {
  if (substr === '') return null;
  return str.split(substr).length - 1;
}
