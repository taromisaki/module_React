import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import getStore from './store'
import CreateRouter from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        {CreateRouter()}
        <div className="App-header">
          <h2>hello world !</h2>
        </div>
      </div>
    )
  }
}

const store = getStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)