import rolex from '../images/brands/rolex.svg'
import bulova from '../images/brands/bulova.svg'
import cartier from '../images/brands/cartier.svg'
import casio from '../images/brands/casio.svg'
import fossil from '../images/brands/fossil.svg'
import gucci from '../images/brands/gucci.svg'
import hamilton from '../images/brands/hamilton.svg'
import seiko from '../images/brands/seiko.svg'
import swatch from '../images/brands/swatch.svg'
import tissot from '../images/brands/tissot.svg'
import tagheuer from '../images/brands/tag-heuer.svg'
import '../styles/slider.css'

function Slider() {
  return (
    <div className='slider'>
      <div className='slide-track'>
          <img className="brand" src={bulova} alt="bulova"/>
          <img className="brand" src={rolex} alt="rolex"/>
          <img className="brand" src={fossil} alt="fossil"/>
          <img className="brand" src={casio} alt="casio"/>
          <img className="brand" src={cartier} alt="cartier"/>
          <img className="brand" src={hamilton} alt="hamilton"/>
          <img className="brand" src={gucci} alt="gucci"/>
          <img className="brand" src={seiko} alt="seiko"/>
          <img className="brand" src={swatch} alt="swatch"/>
          <img className="brand" src={tissot} alt="tissot"/>
          <img className="brand" src={tagheuer} alt="tagheuer"/>
      </div>
    </div>
  )
}

export default Slider