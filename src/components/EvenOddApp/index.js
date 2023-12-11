// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  isIncrement = () => {
    this.setState(previousState => {
      const {count} = previousState
      const randomNumber = count + Math.ceil(Math.random() * 100)
      let num
      if (randomNumber % 2 === 0) {
        num = true
      } else {
        num = false
      }

      return {isEven: num, count: randomNumber}
    })
  }

  render() {
    const {isEven, count} = this.state
    const display = isEven ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="inside-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {display}</p>
          <button type="button" className="button" onClick={this.isIncrement}>
            Increment
          </button>
          <p className="last-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
