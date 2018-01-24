import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import propTypes from 'prop-types'

class App extends React.Component {
  static propTypes = {
    store: propTypes.object.isRequired,
    routes: propTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <div style={ { height: '100%' } }>
          <Router history={ browserHistory } children={ this.props.routes } />
        </div>
      </Provider>
    )
  }
}

export default App
