# Stripe Local

A library to test Stripe Webhooks locally in Node. Uses real events from your Stripe account by polling for them at a defined interval and passing the data to your local server.

Stripe Local will only receive events that happen while it's running, so you won't ever receive old events.

> *NOTE: This package is meant for a local development environment ONLY. For live/production environments with a publicly accessible URL, you should use Stripe's [webhooks](https://stripe.com/docs/webhooks).*

## Getting Started

```bash
$ npm install --save-dev stripe-local
```

```javascript
if (process.env.NODE_ENV === 'development') {
  require('stripe-local')({
    secretKey: process.env.STRIPE_KEY,
    webhookUrl: 'http://localhost:7000/stripe'
  })
}
```

## Todo

- [ ] Store requests so we can monitor their status
- [ ] Retry failed requests after an interval
- [ ] Log out request response

## License

[MIT](LICENSE) © [Jason Maurer](http://maur.co)
