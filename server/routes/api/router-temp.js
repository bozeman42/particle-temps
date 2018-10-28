const router = require('express').Router()

router.get('/',(req,res) => {
  res.send('Hello from the temp router!')
})

module.exports = router