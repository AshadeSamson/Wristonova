import search from '../icons/magnifying-glass-solid.svg'
import cart from '../icons/cart-shopping-solid.svg'

function Header() {
  return (
    <nav className='bg-zinc-100 flex flex-row iems-center py-2 px-1'>
        <div className='flex justify-normal items-start mr-auto w-2/4'>
            <h2 className='font-black text-2xl text-red-700 mr-6'>WRISTONOVA</h2>
            <ul className='text-zinc-700 list-none flex'>
                <li className='mr-6'>Home</li>
                <li className='mr-6'>Shop</li>
                <li className='mr-6'>Features</li>
                <li className='mr-6'>Reviews</li>
                <li className=''>Contact Us</li>
            </ul>
        </div>
        <div className='flex'>
            <h4 className='text-zinc-700 mr-8'>login</h4>
            <div><img className="w-6 h-auto mr-8 object-contain" src={search} alt="search" /></div>
            <div><img className="w-6 h-auto object-contain" src={cart} alt="search" /></div>
        </div>
    </nav>
  )
}

export default Header