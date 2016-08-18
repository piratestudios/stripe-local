# Stripe Local

[![Build Status](https://travis-ci.org/jsonmaur/stripe-local.svg?branch=master)](https://travis-ci.org/jsonmaur/stripe-local)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A library to receive Stripe Webhooks locally in Node to help with testing. Uses real events from your Stripe account by polling for them at a defined interval and passing the data to your local server.

Stripe Local will only receive events that occur while running. Because of this, you will never receive old events.

> *NOTE: This package is meant for a local development environment ONLY. For live/production environments with a publicly accessible URL, you should use Stripe [webhooks](https://stripe.com/docs/webhooks) themselves.*

## Getting Started

```bash
# to use the CLI
$ npm install -g stripe-local

# or use the API
$ npm install --save-dev stripe-local
```

### CLI

```bash
# start listening
$ stripe-local --key $STRIPE_KEY --url http://localhost:7000/stripe

# to get list of options
$ stripe-local help
```

### API

```javascript
/* make sure you only run in dev environment */
if (process.env.NODE_ENV === 'development') {
  require('stripe-local')({
    secretKey: process.env.STRIPE_KEY,
    webhookUrl: 'http://localhost:7000/stripe'
  })
}
```

##### Options

- `secretKey` Your Stripe test secret key. You should set this in an environment variable to avoid committing to version control.

  > Type: string  
  > Required

- `webhookUrl` The local URL to send Stripe webhooks to as events are received. This endpoint should be equipped in your application to handle [Stripe webhooks](https://stripe.com/docs/webhooks).

  > Type: string  
  > Required

- `interval` The amount of time (in milliseconds) to wait between polling the Stripe API for new events.

  > Type: number  
  > Default: `5000` (5s)

## Todo

- [ ] Store requests so we can monitor their status
- [ ] Retry failed requests after an interval
- [ ] Log out request response

## License

[MIT](LICENSE) © [Jason Maurer](http://maur.co)
