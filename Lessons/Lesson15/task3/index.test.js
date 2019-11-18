import { createLogger } from './index';

it('should get []', () => {
    const logger = createLogger();
    const logs = logger.getRecords();

    expect(logs).toEqual([]);
})

it('should get []', () => {
    const logger = createLogger();
    logger.warn('warning');
    logger.log('log message');
    const logs = logger.getRecords('error');

    expect(logs).toEqual([]);
})

it('should get []', () => {
    const logger = createLogger();
    logger.warn('warning');
    logger.error('error message');
    const logs = logger.getRecords('log');

    expect(logs).toEqual([]);
})

it('should get []', () => {
    const logger = createLogger();
    logger.log('log message');
    logger.error('error message');
    const logs = logger.getRecords('warn');

    expect(logs).toEqual([]);
})

it('should get message === "warning"', () => {
    const logger = createLogger();
    logger.warn('warning');
    const message = logger.getRecords('warn')[0].message;
    
    expect(message).toEqual('warning');
})

it('should get type === "warn"', () => {
    const logger = createLogger();
    logger.warn('warning');
    const type = logger.getRecords('warn')[0].type;
    
    expect(type).toEqual('warn');
})

it('should get message === "log"', () => {
    const logger = createLogger();
    logger.log('log message');
    const message = logger.getRecords('log')[0].message;
    
    expect(message).toEqual('log message');
})

it('should get type === "log"', () => {
    const logger = createLogger();
    logger.log('log message');
    const type = logger.getRecords('log')[0].type;
    
    expect(type).toEqual('log');
})

it('should get message === "error"', () => {
    const logger = createLogger();
    logger.error('error message');
    const message = logger.getRecords('error')[0].message;
    
    expect(message).toEqual('error message');
})

it('should get type === "error"', () => {
    const logger = createLogger();
    logger.error('error message');
    const type = logger.getRecords('error')[0].type;
    
    expect(type).toEqual('error');
})

