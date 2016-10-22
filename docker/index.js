require('stripe-local')({
  secretKey: process.env.STRIPE_KEY,
  webhookUrl: process.env.WEBHOOK_URL
})
