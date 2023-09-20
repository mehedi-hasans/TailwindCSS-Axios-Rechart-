
import './App.css'
import Carousel from './compnents/Carousel/Carousel'
import LineChart from './compnents/LineChart/LineChart'
import Navbar from './compnents/Navbar/Navbar'
import Phones from './compnents/Phones/Phones'
import PriceOptions from './compnents/Price Options/PriceOptions'
import Map from './compnents/Map/Map'
import Gallery from './compnents/Gallery/Gallery'
import ImageViewer from './compnents/Image Viewer/ImageViewer'
import Footer from './compnents/Footer/Footer'

function App() {


  return (
    <>

      <Navbar/>
      <Carousel/>
      <PriceOptions/>
      <LineChart/>
      <Phones/>
      <Gallery/>
      <Map/>
      <ImageViewer/>
      <Footer/>
    </>
  )
}

export default App
