// Write your code here
import './index.css'

const AppItem = props => {
  const {displayData} = props
  const {dishName, dishImage} = displayData

  return (
    <li className="app-item">
      <img className="app-image" src={dishImage} alt={dishName} />
      <p className="app-name">{dishName}</p>
    </li>
  )
}

export default AppItem
