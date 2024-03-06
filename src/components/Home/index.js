import {Component} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'
import TabItem from '../TabItem'
import AppItem from '../AppItem'

/* const restaurantsApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
} */

class Home extends Component {
  state = {
    allDishes: [],
    displayData: [],
    restName: '',
    activeTabId: 0,
  }

  componentDidMount() {
    this.getAllDishesData()
  }

  getAllDishesData = async () => {
    const apiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'

    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      // console.log(response)
      const data = await response.json()

      // console.log('data : ', data)

      const array = data.map(each => ({
        tableMenuList: each.table_menu_list,
        restaurantName: each.restaurant_name,
      }))

      const totalDetails = array[0]
      const {tableMenuList, restaurantName} = totalDetails
      this.setState({restName: restaurantName})

      const format = tableMenuList.map(each => ({
        categoryDishes: each.category_dishes.map(each1 => ({
          dishId: each1.dish_id,
          dishName: each1.dish_name,
          dishAvailability: each1.dish_Availability,
          dishCurrency: each1.dish_currency,
          dishType: each1.dish_Type,
          dishCalories: each1.dish_calories,
          dishImage: each1.dish_image,
          dishPrice: each1.dish_price,
          dishDescription: each1.dish_description,
          nexturl: each1.nexturl,
          addonCat: each1.addonCat,
          // ...
        })),
        menuCategory: each.menu_category,
        menuCategoryId: each.menu_category_id,
        menuCategoryImage: each.menu_category_image,
        nexturl: each.nexturl,
      }))
      // console.log('format:-->', format)
      const single = format[0]
      const activeId = single.menuCategoryId
      const {categoryDishes} = single
      // this.setState({displayData: categoryDishes})
      this.setState({
        allDishes: format,
        activeTabId: activeId,
        displayData: categoryDishes,
      })
    }
  }

  setActiveTabId = (tabId, dishesDet) => {
    this.setState({activeTabId: tabId, displayData: dishesDet})
  }

  renderRestaurantDetails = () => {
    const {allDishes, activeTabId, displayData} = this.state

    return (
      <div>
        <ul className="tabs-list">
          {allDishes.map(eachTab => (
            <TabItem
              key={eachTab.menuCategoryId}
              tabDetails={eachTab}
              setActiveTabId={this.setActiveTabId}
              setDisplayData={this.setDisplayData}
              isActive={activeTabId === eachTab.menuCategoryId}
            />
          ))}
        </ul>
        <ul className="list-con">
          {displayData.map(each => (
            <AppItem key={each.dishId} dishDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {allDishes, restName, activeTabId, displayData} = this.state
    console.log('allDishes : ', allDishes)
    console.log('displayData : ', displayData)
    console.log('activeTabId : ', activeTabId)
    const q = 0

    return (
      <>
        <div className="container">
          <div className="header-container">
            <h1 className="header-heading">{restName}</h1>
            <div>
              <p className="header-txt">My Orders</p>
              <AiOutlineShoppingCart className="cart" />
              <p className="cart-text">{q}</p>
            </div>
          </div>
          {this.renderRestaurantDetails()}

          <p>Details of restaurants</p>
        </div>
      </>
    )
  }
}

export default Home
