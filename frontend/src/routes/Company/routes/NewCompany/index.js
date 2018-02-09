export const NewCompanyRoute = _store => ({
  path: 'new',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const NewCompany = require('./containers/NewCompany').default

      cb(null, NewCompany)
    }, 'company-new')
  },
})
