
import SecondUserList from './api/SecondUserList'
import UserList from './api/User'
import UserListAxios from './api/UserListAxios'
import './App.css'
import Cart from './components/Cart'
import Counter from './components/Counter'
import ProductList from './components/ProductList'
import Fetch from './middleware/Fetch'
import FirstError from './error/FirstError'
import Second from './error/Second'
import ErrorBoundary from './error/ErrorBoundary'

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
      <ErrorBoundary>
      <FirstError name="Shree"/>
      <Second/>
      </ErrorBoundary>
    </div>
  )
}

export default App
