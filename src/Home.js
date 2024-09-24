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
    <div className='parent w-full flex  mt-6'>

<div className='firstDiv w-[80%]'>

<div className='grid grid-cols-3  gap-4  p-4'>

      <div className=''>
        <img className='w-72 h-64' src={waffle} alt='' />
        <button className=' bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Waffle</p>
        <p className='text-1xl font-bold'>Wafffle with Berries</p>  
        <p className='text-1xl font-sans text-red-700'>$6.50</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Creme} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Creme Brulee</p>
        <p className='text-1xl font-bold'>Vanilla Bean Creme Brulee</p>
        <p className='text-1xl font-sans text-red-700'>$7.00</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Macaron} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black' >Add to Cart</button>
        <p className='text-xs font-sans'>Macaron</p>
        <p className='text-1xl font-bold'>Macaron Mix of Five</p>
        <p className='text-1xl font-sans text-red-700'>$8.00</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Tiramisu} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Tiramisu</p>
        <p className='text-1xl font-bold'>Classic Tiramisu</p>
        <p className='text-1xl font-sans text-red-700'>$5.50</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Baklava} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Baklava</p>
        <p className='text-1xl font-bold'>Pistachio Baklava</p>
        <p className='text-1xl font-sans text-red-700'>$4.00</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Pie} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Pic</p>
        <p className='text-1xl font-bold'>Lemon Meringue Pie</p>
        <p className='text-1xl font-sans text-red-700'>$5.00</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Cake} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Cake</p>
        <p className='text-1xl font-bold'>Red Velvet Cake</p>
        <p className='text-1xl font-sans text-red-700'>$4.50</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Brownie} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>Brownie</p>
        <p className='text-1xl font-bold'>Saited Caramel Brownie</p>
        <p className='text-1xl font-sans text-red-700'>$5.50</p>
      </div>

      <div>
        <img className='w-72 h-64' src={Panna} alt='' />
        <button className='bg-white text-black px-2 py-1  m-2 rounded-full border-solid border-2 border-black'>Add to Cart</button>
        <p className='text-xs font-sans'>panna Cotta</p>
        <p className='text-1xl font-bold'>Vanilla panna Cotta</p>
        <p className='text-1xl font-sans text-red-700'>$6.50</p>
      </div>

    </div>

</div>

<div className='secondDiv w-[20%] flex justify-center'>
<div className=' w-full h-screen space-y-4 bg-white shadow-xl  items-center'>
  <h3 className='font-semibold text-center'>Your Cart</h3>
  <p className='flex justify-center'>Your Cart is Empty.</p>
  <hr className='w-full '/>
  <h3 className='mt-2 text-center font-semibold'>Total: $0.00</h3>
  <div className='flex justify-center'>
  <button className=' px-20 rounded-md p-3 bg-orange-500'>Confirm</button>

  </div>

</div>

</div>



    
    

    </div>
  )
}

export default Home
