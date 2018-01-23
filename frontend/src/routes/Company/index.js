import { injectReducer } from '../../store/reducers'

export const CompanyRoute = store => ({
  path: 'company',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const Company = require('./components/CompanyView').default
      const reducer = require('./modules/companies').default

      injectReducer(store, {
        key: 'companies',
        reducer,
      })
      cb(null, Company)
    }, 'companies')
  },
})

