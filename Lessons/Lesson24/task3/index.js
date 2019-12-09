const MILLSEC_PER_MINUTE = 60 * 1000;
const MILLSEC_PER_HOUR = 60 * MILLSEC_PER_MINUTE;
const MILLSEC_PER_DAY = 24 * MILLSEC_PER_HOUR;

function getDiff(startDate, endDate) {
    const diffMs = Math.abs(endDate - startDate);
    const countDays = Math.trunc(diffMs / MILLSEC_PER_DAY);
    const countDaysInMs = countDays * MILLSEC_PER_DAY;

    const restOfDayInMs = diffMs - countDaysInMs;

    const countHours = Math.trunc((restOfDayInMs) / MILLSEC_PER_HOUR);
    const restOfHourInMs = restOfDayInMs - (countHours * MILLSEC_PER_HOUR);

    const countMinutes = Math.trunc((restOfHourInMs) / MILLSEC_PER_MINUTE);
    const countSeconds = Math.trunc((restOfHourInMs - (countMinutes * MILLSEC_PER_MINUTE)) / 1000);

    return `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
}

export {
    getDiff
};