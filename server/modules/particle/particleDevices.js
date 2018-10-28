const particle = require('./particle')
const token = process.env.PARTICLE_TOKEN

async function getAllDevices() {
  const result = await particle.listDevices({auth: token})
  return result.body
}
async function getConnectedDevices() {
  const result = await particle.listDevices({auth: token})
  const devices = result.body
  return devices.filter(device => device.connected)
}

module.exports = {
  getAllDevices,
  getConnectedDevices
}