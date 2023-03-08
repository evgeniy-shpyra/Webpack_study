import { createLogger } from "../logger";

it('should return stored logs', () => {
    const logger = createLogger('user login')
    expect(logger.getLogs()).toEqual([])
})

it('should save log message', () => {
    const logger = createLogger('user login')
    
    const newLog = 'user login log'

    logger.log(newLog)

    expect(logger.getLogs()).toEqual([`log - user login - ${newLog}`])
})

it('should save errors', () => {
    const logger = createLogger('user login')
    
    const newError = 'unauthorized'

    logger.error(newError)

    expect(logger.getLogs()).toEqual([`error - user login - ${newError}`])
})