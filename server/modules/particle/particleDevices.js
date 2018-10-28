const particle = require('./particle')
const token = process.env.PARTICLE_TOKEN

const getDevices = () => {
  return particle.listDevices({auth: token})
}

module.exports = getDevices