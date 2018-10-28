const particle = require('./particle')

tokenPromise = loginInfo => particle.login(loginInfo)

module.exports = tokenPromise