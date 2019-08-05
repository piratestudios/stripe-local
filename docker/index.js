require('stripe-local')({
  secretKey: process.env.STRIPE_KEY,
  webhookSecret: process.env.STRIPE_SIGNING_SECRET,
  webhookUrl: process.env.WEBHOOK_URL
})
