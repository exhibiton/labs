export default store => ({
  path: 'company',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const Company = require('./components/CompanyView').default

      cb(null, Company)
    }, 'companies')
  },
})

