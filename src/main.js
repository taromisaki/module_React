import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>hello world !</h2>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
)