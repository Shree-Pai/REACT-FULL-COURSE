import { useState } from 'react'
import LifeCycleFirst from './life_cycle_component/LifeCycleFirst'
import LifeCycleSecond from './life_cycle_component/LifeCycleSecond'
import LifeCycleThird from './life_cycle_component/LifeCycleThird'

function App() {

  return (
    <>
    <center>
      <LifeCycleFirst/>
      <hr /><br />
      <LifeCycleSecond/>
      <hr /><br />
      <LifeCycleThird/>
      </center>
    </>
  )
}

export default App
