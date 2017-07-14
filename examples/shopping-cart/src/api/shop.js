/**
 * Mocking client-server processing
 */
import _products from './products.json'
import _session from './session.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
  // getSession: (cb, timeout) => setTimeout(() => cb(_session), timeout || TIMEOUT)
}
