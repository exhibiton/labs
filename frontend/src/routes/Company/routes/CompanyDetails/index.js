export const CompanyDetailsRoute = _store => ({
  path: ':id',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const CompanyDetails = require('./containers/CompanyDetails').default

      cb(null, CompanyDetails)
    }, 'companies')
  },
})
