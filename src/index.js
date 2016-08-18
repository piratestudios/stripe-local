import assert from 'assert'
import Stripe from 'stripe'
import axios from 'axios'

module.exports = (opts = {}) => {
  assert(typeof opts === 'object', 'Options must be an object')
  assert(opts.secretKey, 'Must pass your Stripe secret key!')
  assert(opts.webhookUrl, 'Must pass a webhook URL!')

  opts.interval = opts.interval
    ? parseInt(opts.interval, 10)
    : 5000

  const stripe = Stripe(opts.secretKey)
  const currentTimeStamp = () => Math.floor(Date.now() / 1000)

  const request = axios.create({
    timeout: 5000
  })

  let lastTimestamp = currentTimeStamp()
  setInterval(() => {
    stripe.events.list({
      created: {
        gt: lastTimestamp
      }
    }, (err, evts) => {
      if (err) return console.error(err)

      lastTimestamp = currentTimeStamp()
      Promise.all(evts.data.map(evt => {
        return stripe.events.retrieve(evt.id)
          .then(data => request.post(opts.webhookUrl, data))
      })).catch(err => console.error(err))
    })
  }, opts.interval)
}
