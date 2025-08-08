//my code
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    counter: 0,
  }

  onIncrement = () => {
    this.setState(prevState => {
      return {counter: prevState.counter + Math.ceil(Math.random(0, 100) * 100)}
    })
  }

  render() {
    const {counter} = this.state
    let valued
    if (counter % 2 == 0) {
      valued = <p>Count is Even</p>
    } else {
      valued = <p>Count is Odd</p>
    }

    return (
      <div className="maincontainer">
        <div className="container1">
          <h1>Count {counter}</h1>
          {valued}
          <button onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

//
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {displayText}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
