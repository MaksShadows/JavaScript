const getCustomersList = obj => {

  const copyObj = JSON.parse(JSON.stringify(obj));
  const arrWithObj = Object.values(copyObj);
  const objWithKey = Object.keys(copyObj);


  for (let i = 0; i < arrWithObj.length; i++) {
      arrWithObj[i].id = objWithKey[i];
  }


  return arrWithObj.sort((a, b) => a.age > b.age ? 1 : -1);
}