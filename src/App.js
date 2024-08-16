import React from 'react'
import Comp from './components/Comp'
import HOC from './components/HOC'

const App = () => {
  return (
    <>
    <HOC comp={Comp} />
    </>
  )
}

export default App