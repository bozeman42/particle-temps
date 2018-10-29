const router = require('express').Router()
const getTemps = require('../../modules/getTemps')

router.get('/',(req,res) => {
  res.send(getTemps())
})

module.exports = router