export const requestUserData = (userId, callback) => {


  const onLoad = () => {
      if (userId == 'broken') {
          callback(null, 'Failed to load user data');
          return;
      }
      callback({
          userId,
          email: `${userId}@example.com`,
      });
  }
  setTimeout(onLoad, Math.floor(Math.random() * 3 + 1) * 1000);

};