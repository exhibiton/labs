export const AddTechnologiesRoute = _store => ({
  path: 'new/technologies',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const AddTechnologies = require('./containers/AddTechnologies').default

      cb(null, AddTechnologies)
    }, 'companies')
  },
})
