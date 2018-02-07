export const CompanyEditRoute = _store => ({
  path: ':id/edit',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const CompanyEditRoute = require('./containers/CompanyEdit').default

      cb(null, CompanyEditRoute)
    }, 'company-edit')
  },
})
