import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {coinCount: 0, heads: 0, tails: 0, isHeads: true}

  getResult = () => {
    const coinResult = Math.ceil(Math.random() * 2)
    this.setState(prevState => ({coinCount: prevState.coinCount + 1}))
    if (coinResult === 1) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({isHeads: true})
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({isHeads: false})
    }
  }

  render() {
    const {coinCount, heads, tails, isHeads} = this.state
    const image = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <br />
          <button
            type="button"
            className="toss-button"
            onClick={this.getResult}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{coinCount}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
