import { getCustomersList } from './index';

it('should get result array', () => {
    const result = getCustomersList( {
        'customer-id-1': {
            name: 'William',
            age: 54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
    });
    
    expect(result).toEqual([
      { name: 'William', age: 54, id: 'customer-id-1' },
      { name: 'Tom', age: 17, id: 'customer-id-2' },
  ]);

});

it('should get result array', () => {
  const result = getCustomersList({
      'customer-id-1': {name: 'William'},
      'customer-id-2': { name: 'Tom'},
  });
  
  expect(result).toEqual([
      {
        name: 'William',
      },     
      {
        name: 'Tom',
      },
  ]);
});

it('should get result array', () => {
    const result = getCustomersList({});
    
    expect(result).toEqual([]);
});

