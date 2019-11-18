export const createCalculator = () => {
  let count = 0;

  return {
      add: num => {
          count += num;
      },

      decrease: num => {
          count -= num;
      },

      reset: () => {
          count = 0;
      },
      getMemo: () => {
          return count;
      },
  }
}