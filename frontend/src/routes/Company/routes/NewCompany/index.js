import { injectReducer } from '../../../../store/reducers'

export const NewCompanyRoute = store => ({
  path: 'new',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const NewCompany = require('./containers/NewCompany').default
      const reducer = require('./modules/CreateCompanyReducer').default

      injectReducer(store, {
        key: 'createCompany',
        reducer,
      })
      cb(null, NewCompany)
    }, 'companies')
  },
})
