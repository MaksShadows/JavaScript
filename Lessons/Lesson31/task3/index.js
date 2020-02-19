export const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log('resolve'));
    }, time)
  });
};

delay(3000).then(() => console.log("Done"));
