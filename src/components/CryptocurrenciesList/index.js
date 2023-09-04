import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachValue => ({
      currencyLogo: eachValue.currency_logo,
      currencyName: eachValue.currency_name,
      euroValue: eachValue.euro_value,
      id: eachValue.id,
      usdValue: eachValue.usd_value,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
    console.log(updatedData)
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div className="image-container ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="image"
          />
        </div>
        <div>
          <ul className="list-container">
            <li className="item-container">
              <p className="coin-text">Coin Type</p>
              <div className="right-side">
                <p className="usd-text">USD</p>
                <p className="euro-text">EURO</p>
              </div>
            </li>

            {isLoading ? (
              <div data-testid="loader">
                <Loader />
              </div>
            ) : (
              cryptoList.map(eachValue => (
                <CryptocurrencyItem eachValue={eachValue} key={eachValue.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
