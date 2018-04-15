/* eslint-disable global-require */

const requireDev = () => require('./configureStore.dev').default;

const requireProd = () => require('./configureStore.prod').default;

module.exports = process.env.NODE_ENV === 'development' ? requireDev() : requireProd();
