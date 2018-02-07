import { injectReducer } from '../../store/reducers'

export default store => ({
  path: '/profile',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const Profile = require('./containers/Profile').default
      const reducer = require('./modules/ProfileReducer').default

      injectReducer(store, {
        key: 'profile',
        reducer,
      })

      cb(null, Profile)
    }, 'profile')
  },
})
