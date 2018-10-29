const { getAllDevices, getConnectedDevices } = require('./particle/particleDevices')
const particle = require('./particle/particle')
const token = process.env.PARTICLE_TOKEN

let temps = []

  const getTemps = devices => {
    const varCalls = devices.map(device => {
      return particle.getVariable({ deviceId: device.id, name: 'tempF', auth: token }).catch(err => console.log(err))
    })
    setInterval(() => {
      Promise.all(varCalls)
        .then(responses => {
          const datapoint = responses.map(({ body }) => body)
          temps = [
            ...temps,
            {
              timestamp: new Date,
              datapoint
            }
          ]
        })
        .catch(err => res.send(err.error))
    },5000)
  }

  getConnectedDevices()
  .then(getTemps)

  module.exports = () => temps