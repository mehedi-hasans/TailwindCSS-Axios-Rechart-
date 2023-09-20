import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
export default function Carousel() {
  return (
    <div className='mb-8'>
        <AwesomeSlider>
            <div><img src="../../../public/images/01.jpg" alt="" /></div>
            <div><img src="../../../public/images/02.jpg" alt="" /></div>
            <div><img src="../../../public/images/03.jpg" alt="" /></div>
            <div><img src="../../../public/images/04.jpg" alt="" /></div>
            <div><img src="../../../public/images/05.jpg" alt="" /></div>
        </AwesomeSlider>
    </div>
  )
}
