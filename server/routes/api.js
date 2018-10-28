const router = require('express').Router()
const tempRouter = require('./api/router-temp')

router.use('/temp',tempRouter)

router.get('/',(req,res) => {
  res.send('api router here!')
})

module.exports = router