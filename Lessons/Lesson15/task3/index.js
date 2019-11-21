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

        getRecords: type => {
            if (type != undefined ) {
                return result.sort((a, b) => b.dateTime - a.dateTime);
            } else {
                return result.filter(i => i.type == type)
            }
        },
    }
};
