import search from '../icons/magnifying-glass-solid.svg'
import cart from '../icons/cart-shopping-solid.svg'
import hamburger from '../icons/bars-solid.svg'

function Header() {
  return (
    <nav className='container relative mx-auto p-6'>
        <div className='flex justify-between items-center'>
            <div className='flex justify-between'>
              <h2 className='font-black text-2xl text-red-700 mr-6'>WRISTONOVA</h2>
              <div className='hidden md:block'>
                <a className='text-zinc-700  hover:text-black mr-6'>Home</a>
                <a className='text-zinc-700  hover:text-black mr-6'>Shop</a>
                <a className='text-zinc-700  hover:text-black mr-6'>Features</a>
                <a className='text-zinc-700  hover:text-black mr-6'>Reviews</a>
                <a className='text-zinc-700 hover:text-black '>Contact Us</a>
              </div>
            </div>
            <div className='hidden md:flex'>
                <a className='text-zinc-700 hover:text-black mr-8'>login</a>
                <a><img className="w-6 h-auto mr-8 object-contain" src={search} alt="search" /></a>
                <a><img className="w-6 h-auto object-contain" src={cart} alt="search" /></a>
            </div>
            <div className='block md:hidden'>
              <a><img className="w-6 h-auto object-contain" src={hamburger} alt="menu"/></a>
            </div>
        </div>
        <div className='container absolute right-0 flex flex-col justify-around items-start px-10 mt-5 drop-shadow-lg md:hidden' id='mobile-menu'>
            <a className='text-zinc-700 mb-6'>Home</a>
            <a className='text-zinc-700 mb-6'>Shop</a>
            <a className='text-zinc-700 mb-6'>Features</a>
            <a className='text-zinc-700 mb-6'>Reviews</a>
            <a className='text-zinc-700 mb-12'>Contact Us</a>
            <a className='text-zinc-700 mb-6'>login</a>
            <a><img className="w-6 h-auto mb-6 object-contain" src={cart} alt="search" /></a>
        </div>
    </nav>
  )
}

export default Header