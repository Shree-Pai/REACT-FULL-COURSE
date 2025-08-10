import { useState } from 'react'
import './App.css'
import Fetch from './middleware/Fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Redux-Based API Fetching App</h2>
      <Fetch/>
    </div>
  )
}

export default App
