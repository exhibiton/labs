import { NewCompanyRoute } from './routes/NewCompany'
import { AddFoundersRoute } from './routes/AddFounders/index';
import { AddTechnologiesRoute } from './routes/AddTechnologies/index';

export default store => ({
  path: 'company',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], require => {
        const Company = require('./components/CompanyView').default

        cb(null, Company)
      }, 'companies')
    },
  },

  childRoutes: [
    NewCompanyRoute(store),
    AddFoundersRoute(store),
    AddTechnologiesRoute(store),
  ],

})

