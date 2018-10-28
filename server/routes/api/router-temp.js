const router = require('express').Router()
const getDevices = require('../../modules/particle/particleDevices')


router.get('/',(req,res) => {
  getDevices()
  .then(result => {
    console.log(result)
    res.send(result)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
})

module.exports = router