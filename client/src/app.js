import React, { Component } from 'react'
import { render } from 'react-dom'

import styles from './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.hello}>
        Hello world!
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
