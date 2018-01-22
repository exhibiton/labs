import SignIn from './components/SignIn'

// Sync route definition
export default _store => ({
  // component : SignIn
  getComponent(nextState, cb) {
    cb(null, SignIn)
  },
})
