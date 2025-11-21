import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../componentStyles/Nocart.css";
import emptyCart from '../Images/emptyCart.png'

const Nocart = () => {
  return (
    <div>
      <div className="empty-cart-wrapper">
  <div className="empty-cart-container">
    <div className="cart-image-wrapper">
      <img
        src={emptyCart}
        alt="Empty shopping cart"
        className="cart-main-img"
      />

      <div className="floating-icon">
        <ShoppingCart size={24} className="floating-icon-inner" />
      </div>
    </div>

    <div className="text-center space-y-4">
      <h2 className="empty-cart-title">Your cart is feeling lonely</h2>
      <p className="empty-cart-subtext">
        It looks like you haven't added anything to your cart yet.  
        Let’s change that and find some amazing products for you!
      </p>
    </div>

    <div>
      <Link to="/products" className="discover-btn">
        Discover Products
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default Nocart
