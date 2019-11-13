export const getCustomersList = obj => Object.entries(obj)
    .map(elem => ({id: elem[0], ...obj[elem[0]]}))
    .sort((elem1, elem2) => elem1.age - elem2.age);