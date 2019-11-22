export const createLogger = () => {

    const result = [];

    return {
        warn: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',

            })
        },

        error: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'error',

            })
        },

        log: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'log',

            })
        },

        getRecords: function (type) {
            const resultArray = type !== undefined ? result.filter(el => el.type === type) : result;
            return resultArray.sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
        },
    }
};
