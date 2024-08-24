import React from 'react'
import LineChartPage from './LineChartPage'
import BarChartPage from './BarChartPage'
import PieChartPage from './PieChartPage'
import PieChartPages from './PieChartPages'

const App = () => {
  return (
    <><div className='w-[90%] h-[100vh] m-auto'>
      {/* <LineChartPage /> */}
      {/* <BarChartPage/> */}
      {/* <PieChartPage/> */}
      <PieChartPages/>

    </div>
    </>
  )
}

export default App