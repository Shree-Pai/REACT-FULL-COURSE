
import './App.css'
import Cart from './components/Cart'
import Counter from './components/Counter'
import ProductList from './components/ProductList'

function App() {
  

  return (
    <div>
      <h1>Redux : State Management</h1>
      {/* <Counter/> */}
      <ProductList/>
      <Cart/>
    </div>
  )
}

export default App
