import deals from '../images/icons/deals.svg'
import '../styles/hotdeals.css'

function Hotdeals() {
  return (
    <div className='flex'>
      <div><h2>Hot deals for you</h2></div>
      <div>
        <img className='deals-icon' src={deals} alt="" />
        <h3>20% Off</h3>
        <p>Time for savings! Enjoy 20% off all wristwatch purchases. Ticktock your way to incredible deals today!</p>
      </div>
      <div>
        <img className='deals-icon' src={deals} alt="" />
        <h3>20-days Return Policy</h3>
        <p>Shop with confidence! Enjoy our hassle-free 20-day return policy. Discover the perfect wristwatch risk free!</p>
      </div>
      <div>
        <img className='deals-icon' src={deals} alt="" />
        <h3>Style Up</h3>
        <p>Upgrade your style and elevate your look! Shop now and unlock the key to effortless sophistication. Style up with our exclusive wristwatch collection!</p>
      </div>
    </div>
  )
}

export default Hotdeals