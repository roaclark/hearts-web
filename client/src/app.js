import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'

import styles from './styles.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Loading...' }
  }

  async componentDidMount() {
    const response = await fetch('api')
    const message = await response.text()
    this.setState({ text: message })
  }

  render() {
    return <div className={styles.hello}>{this.state.text}</div>
  }
}

render(<App />, document.getElementById('app'))
