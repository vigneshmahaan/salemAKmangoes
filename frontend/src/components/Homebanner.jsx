import React from 'react'
import banner_1 from "../Images/banner_1.png"
import "../componentStyles/Homebanner.css"
const Homebanner = () => {
  return (
    <div>
        <br/>
      <div className="banner-wrapper">
  <div className="banner-left">
    <h2 className="banner-title">
      Our best mangoes, <br />
      Now in one-click
    </h2>

    <a href="/products" className="banner-btn">
      Buy Now
    </a>
  </div>

  <div className="banner-right">
    <img src={banner_1} alt="banner-1" className="banner-image" />
  </div>
</div>

    </div>
  )
}

export default Homebanner;
