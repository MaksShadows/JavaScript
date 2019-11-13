export const getPeople = obj => {
  const array = Object.values(obj)
      .map(i => i.map(i => i.name));

  return array.concat.apply([], array);
}
