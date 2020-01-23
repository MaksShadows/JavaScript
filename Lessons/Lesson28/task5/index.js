export const shmoment = date => {

  let result = new Date(date);

  const dateChange  = {
      add(type, value) {
          if (type === 'years') result = new Date(result.getFullYear() + value);
          if (type === 'months') result = new Date(result.getMonth() + value);
          if (type === 'days') result = new Date(result.getDate() + value);
          if (type === 'hours') result = new Date(result.getHours() + value);
          if (type === 'minutes') result = new Date(result.getMinutes() + value);
          if (type === 'seconds') result = new Date(result.getSeconds() + value);
          if (type === 'milliseconds') result = new Date(result.getMilliseconds() + value);
          return this;
      },
      subtract(type, value) {
          if (type === 'years') result = new Date(result.getFullYear() - value);
          if (type === 'months') result = new Date(result.getMonth() - value);
          if (type === 'days') result = new Date(result.getDate() - value);
          if (type === 'hours') result = new Date(result.getHours() - value);
          if (type === 'minutes') result = new Date(result.getMinutes() - value);
          if (type === 'seconds') result = new Date(result.getSeconds() - value);
          if (type === 'milliseconds') result = new Date(result.getMilliseconds() - value);
          return this;
      },
      result() {
          return result;
      },
  }
  return dateChange ;
}

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result())
