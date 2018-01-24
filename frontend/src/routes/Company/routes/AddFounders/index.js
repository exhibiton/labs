export const AddFoundersRoute = _store => ({
  path: 'new/founders',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const AddFounders = require('./containers/AddFounders').default

      cb(null, AddFounders)
    }, 'companies')
  },
})
