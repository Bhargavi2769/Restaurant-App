// Write your code here
import React from 'react'
import './index.css'

const AppItem = props => {
  const {dishDetails, updateCartCount, cartCount} = props
  const {
    dishName,
    dishAvailability,
    dishImage,
    dishCurrency,
    dishPrice,
    dishDescription,
    dishCalories,
    addonCat,
  } = dishDetails

  const handleIncrement = () => {
    updateCartCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    updateCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
  }

  return (
    <li className="app-item">
      <div>
        <p className="app-name">{dishName}</p>
        <p>
          {dishCurrency} {dishPrice}
        </p>
        <p>{dishDescription}</p>
        {dishAvailability ? (
          <div className="button-custom">
            <button
              type="button"
              className="button-class"
              onClick={handleDecrement}
            >
              -
            </button>
            <p className="button-text">{0 /* Display count here */}</p>
            <button
              type="button"
              className="button-class"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        ) : (
          <p>Not available</p>
        )}
        {addonCat.length > 0 ? 'Customizations available' : null}
      </div>
      <div>
        <p className="claories-text">{dishCalories} calories</p>
      </div>
      <img className="app-image" src={dishImage} alt={dishName} />
    </li>
  )
}

export default AppItem

/*
import './index.css'

const AppItem = props => {
  const {dishDetails} = props
  const {
    dishName,
    dishAvailability,
    dishImage,
    dishCurrency,
    dishPrice,
    dishDescription,
    dishCalories,
  } = dishDetails

  const c = 0

  return (
    <li className="app-item">
      <div>
        <p className="app-name">{dishName}</p>
        <p>
          {dishCurrency} {dishPrice}
        </p>
        <p>{dishDescription}</p>
        {dishAvailability ? (
          <div className="button-custom">
            <button type="button" className="button-class">
              -
            </button>
            <p className="button-text">{c}</p>
            <button type="button" className="button-class">
              +
            </button>
          </div>
        ) : (
          <p>Not available</p>
        )}
      </div>
      <div>
        <p className="claories-text">{dishCalories} claories</p>
      </div>
      <img className="app-image" src={dishImage} alt={dishName} />
    </li>
  )
}

export default AppItem
*/
// AppItem.js
