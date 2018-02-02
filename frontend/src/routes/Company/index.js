import { NewCompanyRoute } from './routes/NewCompany'
import { injectReducer } from '../../store/reducers'

export default store => ({
  path: 'company',
  indexRoute: {
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
  },

  childRoutes: [
    NewCompanyRoute(store),
  ],

})

