const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

function dayOfWeek(date, days) {
    const day = date.getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];
}

export {
    dayOfWeek
};