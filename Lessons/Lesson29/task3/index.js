export const printing = () => {
  console.log(1);
  setTimeout(function() { console.log(4); }, 1000);
  console.log(2);
  setTimeout(function() { console.log(5); }, 0);
  console.log(3);
}; 

  //printing();