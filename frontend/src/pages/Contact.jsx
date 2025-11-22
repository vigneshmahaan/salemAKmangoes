import React from "react";
import "../pageStyles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />
      <br />
      <div class="contact-container-executive">
        <div class="contact-wrapper-executive">
          <div class="contact-card-executive address-block">
            <div class="icon-executive">🏢</div>
            <h3 class="serif-heading">Office Address</h3>
            <address>Salem AK Mangoes, Airport Road, Kamalapuram, Salem - 636309, Tamil Nadu, India</address>
            <p class="detail-label">Primary Contact</p>
            <p class="detail-value phone-value">📞 +91 63856 72895</p>

            <h4 class="serif-heading">Terms and Conditions</h4>
            <p class="detail-value phone-value">We ensure transparent pricing and fair business practices for every mango purchase.</p>

            <h4 class="serif-heading">Privacy Policy</h4>
            <p class="detail-value phone-value">Your personal information is securely stored and used only to process your mango orders.</p>

            <h4 class="serif-heading">Return and Refund Policy</h4>
            <p class="detail-value phone-value">Refunds are provided only for damaged or spoiled mangoes reported on the day of delivery.</p>

            <h4 class="serif-heading">Shipping Policy</h4>
            <p class="detail-value phone-value">All mango orders are carefully packed and delivered fresh to your doorstep within the promised time.</p>
          </div>

          <div class="contact-grid-row">
            <div class="contact-card-executive email-card">
              <div class="icon-executive">✉️</div>
              <h3 class="serif-heading">Direct Email</h3>
              <p class="detail-label">24/7 Support</p>
              <p class="detail-value email-value">salem.ak.mango@gmail.com</p>
            </div>

            <div class="contact-card-executive timing-card">
              <div class="icon-executive">📞</div>
              <h3 class="serif-heading">Call Us</h3>
              <p class="detail-value phone-value">+91 63856 72895</p>
              <p class="timing-details">
                Operating Hours: <strong> 10am–5pm (Mon–Fri) </strong>
              </p>
              <p class="msg-details">
                Missed our office hours? Leave us a message and we will return
                next business day.
              </p>
            </div>

            <div class="contact-card-executive helpdesk-card">
              <h3 class="serif-heading">For Bulk Order</h3>
              <p className="text-justify">
                Become a <strong>salemAKmangoes</strong> rep for your apartment
                or neighbourhood and order mangoes in bulk. We deliver bulk
                quantities to apartments, housing societies, organic shops, and
                offices.
              </p>
              <Link
                to="/#bulk-section"
                state={{ scrollTo: "special" }}
                class="btn-executive"
              >
                {" "}
                Bulk order now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
