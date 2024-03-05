// Write your code here
import './index.css'

const AppItem = props => {
  const {dishDetails} = props
  const {
    dishName,
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
        <div className="button-custom">
          <button type="button" className="button-class">
            -
          </button>
          <p className="button-text">{c}</p>
          <button type="button" className="button-class">
            +
          </button>
        </div>
      </div>
      <div>
        <p className="claories-text">{dishCalories}claories</p>
      </div>
      <img className="app-image" src={dishImage} alt={dishName} />
    </li>
  )
}

export default AppItem

