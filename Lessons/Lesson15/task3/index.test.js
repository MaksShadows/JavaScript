import { createLogger } from './index';

it('should be array', () => {
    const log1 = createLogger();

    log1.warn('Are you user');
    log1.error('Oops, we think that you are not user');
    log1.log('Sorry, we made a mistake, YOU are User!!!');

    const types = Array.isArray(log1.getRecords());

    expect(types).toEqual(true);
});

it('should be empty array', () => {
    const log1 = createLogger();

    log1.warn('Are you User?');
    log1.error('Oops, we think that you are not User');

    const result = log1.getRecords('log');

    expect(result).toEqual([]);
});

it('should be array with type warn', () => {
    const log1 = createLogger();

    log1.warn('Are you User?');
    log1.error('Oops, we think that you are not User');

    const result = log1.getRecords('warn')[0].type;

    expect(result).toEqual('warn');
});