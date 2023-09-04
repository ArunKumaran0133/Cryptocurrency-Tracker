import './index.css'

const CryptocurrencyItem = props => {
  const {eachValue} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachValue

  return (
    <li className="coin-item-container">
      <div className="coin-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="coin-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
