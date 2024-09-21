import React from 'react'
import waffle from './images/image-waffle-mobile.jpg'
import Creme from './images/image-creme-brulee-thumbnail.jpg'
import Macaron from './images/image-macaron-thumbnail.jpg'
import Tiramisu from './images/image-tiramisu-mobile.jpg'
import Baklava from './images/image-baklava-tablet.jpg'
import Pie from './images/image-panna-cotta-tablet.jpg'
import Cake from './images/image-cake-thumbnail.jpg'
import Brownie from './images/image-brownie-mobile.jpg'
import Panna from './images/image-panna-cotta-thumbnail.jpg'

const Home = () => {
  return (
    <div>
      <h1>Desserts</h1>

      <div className=''>
        <img className='w-48 h-48' src={waffle} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Waffle</p>
        <p className='text-1xl font-bold'>Wafffle with Berries</p>
        <p className='text-1xl font-sans text-red-700'>$6.50</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Creme} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Creme Brulee</p>
        <p className='text-1xl font-bold'>Vanilla Bean Creme Brulee</p>
        <p className='text-1xl font-sans text-red-700'>$7.00</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Macaron} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black' >Add to Cart</button>
        <p className='text-xs font-sans'>Macaron</p>
        <p className='text-1xl font-bold'>Macaron Mix of Five</p>
        <p className='text-1xl font-sans text-red-700'>$8.00</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Tiramisu} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Tiramisu</p>
        <p className='text-1xl font-bold'>Classic Tiramisu</p>
        <p className='text-1xl font-sans text-red-700'>$5.50</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Baklava} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Baklava</p>
        <p className='text-1xl font-bold'>Pistachio Baklava</p>
        <p className='text-1xl font-sans text-red-700'>$4.00</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Pie} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Pic</p>
        <p className='text-1xl font-bold'>Lemon Meringue Pie</p>
        <p className='text-1xl font-sans text-red-700'>$5.00</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Cake} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Cake</p>
        <p className='text-1xl font-bold'>Red Velvet Cake</p>
        <p className='text-1xl font-sans text-red-700'>$4.50</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Brownie} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Brownie</p>
        <p className='text-1xl font-bold'>Saited Caramel Brownie</p>
        <p className='text-1xl font-sans text-red-700'>$5.50</p>
      </div>

      <div>
        <img className='w-48 h-48' src={Panna} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>panna Cotta</p>
        <p className='text-1xl font-bold'>Vanilla panna Cotta</p>
        <p className='text-1xl font-sans text-red-700'>$6.50</p>
      </div>

    </div>
  )
}

export default Home
