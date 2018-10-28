const router = require('express').Router()
const { getAllDevices, getConnectedDevices } = require('../../modules/particle/particleDevices')

router.get('/',(req,res) => {
  const devices = getConnectedDevices()
  .then(devices => res.send(devices))
})

module.exports = router