import { injectReducer } from '../../../../store/reducers'

export const CompanyDetailsRoute = store => ({
  path: ':id',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const CompanyDetails = require('./containers/CompanyDetails').default
      const reducer = require('./modules/GetCompanyReducer').default

      injectReducer(store, {
        key: 'companyDetails',
        reducer,
      })

      cb(null, CompanyDetails)
    }, 'companies')
  },
})
