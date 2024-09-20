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

      <div>
        <img src={waffle} alt='' />
        <button>Add to Cart</button>
        <p>Waffle</p>
        <p>Wafffle with Berries</p>
        <p>$6.50</p>
      </div>

      <div>
        <img src={Creme} alt='' />
        <button>Add to Cart</button>
        <p>Creme Brulee</p>
        <p>Vanilla Bean Creme Brulee</p>
        <p>$7.00</p>
      </div>

      <div>
        <img src={Macaron} alt='' />
        <button>Add to Cart</button>
        <p>Macaron</p>
        <p>Macaron Mix of Five</p>
        <p>$8.00</p>
      </div>

      <div>
        <img src={Tiramisu} alt='' />
        <button>Add to Cart</button>
        <p>Tiramisu</p>
        <p>Classic Tiramisu</p>
        <p>$5.50</p>
      </div>

      <div>
        <img src={Baklava} alt='' />
        <button>Add to Cart</button>
        <p>Baklava</p>
        <p>Pistachio Baklava</p>
        <p>$4.00</p>
      </div>

      <div>
        <img src={Pie} alt='' />
        <button>Add to Cart</button>
        <p>Pic</p>
        <p>Lemon Meringue Pie</p>
        <p>$5.00</p>
      </div>

      <div>
        <img src={Cake} alt='' />
        <button>Add to Cart</button>
        <p>Cake</p>
        <p>Red Velvet Cake</p>
        <p>$4.50</p>
      </div>

      <div>
        <img src={Brownie} alt='' />
        <button>Add to Cart</button>
        <p>Brownie</p>
        <p>Saited Caramel Brownie</p>
        <p>$5.50</p>
      </div>

      <div>
        <img src={Panna} alt='' />
        <button>Add to Cart</button>
        <p>panna Cotta</p>
        <p>Vanilla panna Cotta</p>
        <p>$6.50</p>
      </div>

    </div>
  )
}

export default Home
