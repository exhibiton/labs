
export default _store => ({
  path: '/discourse/sso',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const SingleSignOn = require('./containers/SingleSignOn').default

      cb(null, SingleSignOn)
    }, 'profile')
  },
})
