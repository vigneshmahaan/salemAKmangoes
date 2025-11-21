import React from "react";
import {
  YouTube,
  Instagram,
} from "@mui/icons-material";
import "../componentStyles/Footer.css";
import Logo from "./Logo";
import FooterTop from "./FooterTop";
import { Container } from "@mui/material";

function Footer() {
  return (
    <>
      <footer className="footer">
        <FooterTop />
        <br />
        <hr />
        <div className="footer-container">
          {/* Section1 */}

          <div className="footer-section contact">
            <Container>
              <h3>
                <Logo />
              </h3>
            </Container>
            <p className="content">
              Known for its organic and exceptionally sweet mangoes, the shop
              continues its long-standing dedication to premium, naturally grown
              fruits, making it a must-visit destination.
            </p>
          </div>

          <div className="footer-section social">
            <h3>Location</h3>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1486.037446217606!2d78.05677994158606!3d11.789459777099113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf90003334837%3A0x65e1d47a357c5b1f!2sSalem%20Ak%20Mango!5e1!3m2!1sen!2sin!4v1763639447612!5m2!1sen!2sin"
                width="200"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Section2 */}
          <div className="footer-section social">
            <h3>Follow me</h3>
            <div className="social-links">
              <a href="/" >
                <YouTube className="social-icon" />
              </a>
              <a href="/">
                <Instagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 salemAKmangoes . All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
