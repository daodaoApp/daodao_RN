const debugMode = true
const mockMode = true
const mockhost = 'https://yapi.alpha.mo9.com/mock/246/daodao/'
const apiHost = './daodao/'
const host = mockMode ? mockhost : apiHost

export default {
  debugMode,
  mockMode,
  host,
}