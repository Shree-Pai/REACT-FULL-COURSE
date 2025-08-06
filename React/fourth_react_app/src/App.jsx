
import SecondUserList from './api/SecondUserList'
import UserList from './api/User'
import UserListAxios from './api/UserListAxios'
import './App.css'
import Cart from './components/Cart'
import Counter from './components/Counter'
import ProductList from './components/ProductList'
import Fetch from './middleware/Fetch'
import FirstError from './error/FirstError'

function App() {
  

  return (
    <div>
      {/* <h1>Redux : State Management</h1> */}
      {/* <Counter/> */}
      {/* <ProductList/>
      <Cart/> */}
      <h1>API Fetching in React</h1>
      {/* <UserList/> */}
      {/* <SecondUserList/> */}
      {/* <UserListAxios/> */}
      {/* <Fetch/> */}
      <FirstError name="Shree"/>
    </div>
  )
}

export default App
