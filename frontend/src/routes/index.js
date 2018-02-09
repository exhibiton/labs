// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import AuthLayout from '../layouts/PageLayout/AuthLayout'
import { getToken } from '../api/utils/authorization-token'
import Home from './Home'
import SignIn from './SignIn'
import CompanyRoute from './Company'
import ProfileRoute from './Profile'

function redirectToLogin(nextState, replace) {
  if (!getToken() && nextState.location.pathname !== '/signup') {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

function redirectToHome(nextState, replace) {
  if (getToken()) {
    replace('/')
  }
}

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = store => [{
  onEnter: (nextState, replace) => redirectToLogin(nextState, replace),
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CompanyRoute(store),
    ProfileRoute(store),
  ],
}, {
  onEnter: redirectToHome,
  path: '/auth',
  component: AuthLayout,
  indexRoute: SignIn(store),
}]

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
