function getOwnProps(obj) {
  const arrOwnPropsObj = [];
  for (const prop in obj) {
      if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
          arrOwnPropsObj.push(prop);
      }
  }

  return arrOwnPropsObj;
}

export {
  getOwnProps
};
