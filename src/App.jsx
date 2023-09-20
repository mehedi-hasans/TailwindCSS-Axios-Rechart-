
import './App.css'
import LineChart from './compnents/LineChart/LineChart'
import Navbar from './compnents/Navbar/Navbar'
import Phones from './compnents/Phones/Phones'
import PriceOptions from './compnents/Price Options/PriceOptions'

function App() {


  return (
    <>
      <Navbar/>
      <PriceOptions/>
      <LineChart/>
      <Phones/>
    </>
  )
}

export default App
