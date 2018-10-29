const router = require('express').Router()
const { getAllDevices, getConnectedDevices } = require('../../modules/particle/particleDevices')
const particle = require('../../modules/particle/particle')

const token = process.env.PARTICLE_TOKEN
console.log(token)

router.get('/',(req,res) => {
  getConnectedDevices()
  .then(devices => {
    const varCalls = devices.map(device => {
      console.log(device)
      return particle.getVariable({deviceId: device.id, name: 'tempC', auth: token}).catch(err => console.log(err))
    })
    Promise.all(varCalls)
    .then(responses => res.send(responses))
    .catch(err => res.send(err.error))
  })
})

module.exports = router