import deals from '../images/icons/deals.svg'
import '../styles/hotdeals.css'

function Hotdeals() {
  return (
    <div className='bg-zinc-200 flex flex-col md:flex-row py-3 mx-auto gap-4 md:gap-5'>
      <div className="deals-header md:self-start"><h2 className='text-4xl font-normal'>Hot deals for you</h2></div>
      <div className="deals">
        <img className='deals-icon' src={deals} alt="deals" />
        <h3 className='text-xl font-medium'>20% Off</h3>
        <p className='text-sm font-normal'>Time for savings! Enjoy 20% off all wristwatch purchases. Ticktock your way to incredible deals today!</p>
      </div>
      <div className="deals">
        <img className='deals-icon' src={deals} alt="deals" />
        <h3 className='text-xl font-medium'>20-days Return Policy</h3>
        <p className='text-sm font-normal'>Shop with confidence! Enjoy our hassle-free 20-day return policy. Discover the perfect wristwatch risk free!</p>
      </div>
      <div className="deals">
        <img className='deals-icon' src={deals} alt="deals" />
        <h3 className='text-xl font-medium'>Style Up</h3>
        <p className='text-sm font-normal'>Upgrade your style and elevate your look! Shop now and unlock the key to effortless sophistication. Style up with our exclusive wristwatch collection!</p>
      </div>
    </div>
  )
}

export default Hotdeals