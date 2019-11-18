function createLogger() {

    const logger = [];

    return {
        warn: function(text) {
            logger.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',
            });
        },
        error: function(text) {
            logger.push({
                message: text,
                dateTime: new Date(),
                type: 'error',
            });
        },
        log: function(text) {
            logger.push({
                message: text,
                dateTime: new Date(),
                type: 'log',
            });
        },
        getRecords: function(type) {
            const resultArray = type !== undefined ? logger.filter(el => el.type === type): logger;
            return resultArray.sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
        },
    };
}

export { createLogger };
