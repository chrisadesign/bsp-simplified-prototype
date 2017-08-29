const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
  res.redirect(`/${req.feature}/${req.sprint}/find-a-payment-schedule`)
})

router.get('/set-up-a-payment-schedule', (req, res) => {
  res.redirect('/payment-scheduler/version-10/set-up-a-payment-schedule')
})

router.get('/find-a-payment-schedule', (req, res) => {
  const query = req.query.nino || ''
  const nino = query.toUpperCase()
  res.render(`${req.feature}/${req.sprint}/find-a-payment-schedule`, {nino})
})

router.post('/change-rate', (req, res) => {
  res.redirect(`/${req.feature}/${req.sprint}/schedule`)
})

router.post('/change-payment-details', (req, res) => {
  res.redirect(`/${req.feature}/${req.sprint}/confirm-payment-details`)
})

router.post('/confirm-payment-details', (req, res) => {
  req.session.data.bankDetails = req.session.data['temp-bankDetails']
  console.log(req.session.data)
  res.redirect(`/${req.feature}/${req.sprint}/schedule`)
})

module.exports = router
