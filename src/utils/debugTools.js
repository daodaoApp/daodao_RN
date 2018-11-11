import config from '../../config'
export const log = config.debugMode ? console.log.bind(console) : () => { }