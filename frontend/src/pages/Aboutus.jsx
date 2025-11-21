import React from "react";
import MangoImg from "../Images/mango-harvest.png";
import Natural from "../Images/100.png";
import Trust from "../Images/trust.png";
import Farm from "../Images/farm.png";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Footer from "../components/Footer";
import "../pageStyles/Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <Navbar />

      <div className="about-section">
        {/* Top Section */}
        <div className="about-top-grid">
          {/* Image */}
          <div className="about-image-wrapper">
            <div className="about-image-relative-container">
              <div className="about-image-background-overlay"></div>

              <img
                src={MangoImg}
                alt="Farm to Table - Premium Organic Mangoes"
                className="about-image"
              />
            </div>
          </div>

          {/* Text */}
          <div className="about-text-content">
            <p className="about-story-subtitle">Our Story & Dedication</p>
            <h1 className="about-main-title">
              Nourishing Wellness and <br className="hidden-md-inline" />
              <span className="about-title-highlight">
                Cultivating Happiness
              </span>
            </h1>

            <p className="about-main-paragraph">
              The renowned <strong> Salem Ak Mango </strong> Shop, established
              in <strong> 2005 </strong>, has become a landmark for fruit
              lovers, conveniently located right near the Salem airport. This
              specialty shop is celebrated for its commitment to quality,
              offering a selection of organic and exceptionally sweet
              mangoes that draw customers from all over.
            </p>
            <p className="about-secondary-paragraph">
              The year 2005 marks the beginning of our dedication to providing
              premium, naturally grown mangoes, solidifying our reputation as a
              must-visit destination for those seeking the purest fruit
              experience.
            </p>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="about-features-grid">
          {/* Box 1: Natural & Chemical Free */}
          <div className="feature-box feature-box-1">
            <div className="feature-icon-wrapper icon-emerald">
              <img src={Natural} className="feature-icon" alt="Natural Icon" />
            </div>
            <h3 className="feature-title">Completely Natural, Zero Chemicals</h3>
            <p className="feature-description">
              We bring you truly fresh, naturally grown produce straight from
              our farms. Each batch is harvested the same day it’s packed and
              ripened without any artificial chemicals or preservatives.
            </p>
          </div>

          {/* Box 2: Trust and Service */}
          <div className="feature-box feature-box-2">
            <div className="feature-icon-wrapper icon-yellow">
              <img src={Trust} className="feature-icon" alt="Trust Icon" />
            </div>
            <h3 className="feature-title">Trusted Service Since Day One</h3>
            <p className="feature-description">
              Serving our community for over 20 years, we have earned a
              reputation built on trust, honesty, and consistent quality. After
              two decades of running our local shop, we are now bringing our
              products online to serve you better.
            </p>
          </div>

          {/* Box 3: Direct from Farm */}
          <div className="feature-box feature-box-3">
            <div className="feature-icon-wrapper icon-indigo">
              <img src={Farm} className="feature-icon" alt="Farm Icon" />
            </div>
            <h3 className="feature-title">Direct Farm-to-Home Assurance</h3>
            <p className="feature-description">
              Our premium mangoes are delivered straight from our farmhouse with
              no middlemen involved, ensuring the best quality at the most
              affordable prices.
            </p>
          </div>
        </div>
        <div className="key-conditions-section">
          <h2 className="conditions-title">
            Important Purchase Conditions & Awareness
          </h2>
          <ul className="conditions-list">
            <li className="condition-item">
              <span className="condition-marker">1.</span>
              <p className="condition-text">
                Since our mangoes ripen naturally, their color and softness may
                differ from fruit to fruit. We ensure they are 100%
                chemical-free, so visual appearance may vary while the natural
                quality remains perfect.
              </p>
            </li>
            <li className="condition-item">
              <span className="condition-marker">2.</span>
              <p className="condition-text">
                After dispatch, the product is under the courier’s care. Any
                transit-related damage must be reported within 24 hours of
                delivery.
              </p>
            </li>
            <li className="condition-item">
              <span className="condition-marker">3.</span>
              <p className="condition-text">
                Since our fruits are highly perishable, we follow a firm
                no-return policy. Replacements are provided only if the product
                arrives damaged and is not fit for consumption.
              </p>
            </li>
            <li className="condition-item">
              <span className="condition-marker">4.</span>
              <p className="condition-text">
                Customers must ensure their delivery address is correct. Refunds
                cannot be issued for orders delivered to an incorrect address.
              </p>
            </li>
            <li className="condition-item">
              <span className="condition-marker">5.</span>
              <p className="condition-text">
                Mango varieties depend on seasonal harvests. If a specific type
                becomes unavailable, your order may be partially refunded or
                replaced with customer consent.
              </p>
            </li>
            <li className="condition-item">
              <span className="condition-marker">6.</span>
              <p className="condition-text">
                If the customer is unavailable during delivery, re-delivery
                charges may apply.
              </p>
            </li>
          </ul>
        </div>
        {/* End 5 Key Conditions Section */}
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
