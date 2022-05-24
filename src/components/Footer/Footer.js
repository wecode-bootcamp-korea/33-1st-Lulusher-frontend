import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="luluFooter">
      <div className="footerWrapper">
        <div className="footerInnerMenu">
          <ul className="footerMenu">
            <h1>MY ACCOUNT</h1>
            <h3>Sign In</h3>
            <h3>Register</h3>
            <h3>Order Status</h3>
            <h3>Returns</h3>
          </ul>
          <div className="footerMenu">
            <h1>HELP</h1>
            <h3>COVID-19 FAQ</h3>
            <h3>Services</h3>
            <h3>Ordering</h3>
            <h3>Shipping Policy</h3>
            <h3>Returns</h3>
            <h3>Sizing</h3>
            <h3>Our Products</h3>
          </div>
          <div className="footerMenu">
            <h1>ABOUT US</h1>
            <h3>Our Business</h3>
            <h3>Media</h3>
            <h3>Investors</h3>
            <h3>Strategic Sales</h3>
            <h3>luluisher Collective</h3>
            <h3>Sweat Collective</h3>
          </div>
          <div className="footerMenu">
            <h1>SCIENCE OF FEEL</h1>
            <h3>Product Care</h3>
          </div>
          <div className="footerMenu">
            <h1>CONTACT US</h1>
            <h3>Live Chat</h3>
            <h3>1.877.263.9300</h3>
            <h3>Email Sign Up</h3>
          </div>
          <div className="footerMenu">
            <h1>CAREERS</h1>
            <h1>COMMUNITY</h1>
            <h1>SUSTAINABILITY</h1>
            <h1>SOCIAL IMPACT</h1>
            <h1>DIVERSITY AND INCLUSION</h1>
            <h1>LULUISHER APPS</h1>
            <h1>SITEMAP</h1>
          </div>
          <div className="footerMenu">
            <h1>GIFT CARDS</h1>
            <h1>STORE LOCATOR</h1>
            <h3>Privacy Policy (Last Updated: 23/5/22)</h3>
            <h3>Korea Privacy Rights (Last Updated: 23/5/22)</h3>
            <h3>Korea Transparency Act</h3>
            <h3>Accessibility Statement</h3>
          </div>
          <div className="footerMenuImg">
            <img
              className="socialImg"
              src="images/social/twitter.png"
              alt="twitter"
            />
            <img
              className="socialImg"
              src="images/social/pinterest.png"
              alt="pinterest"
            />
            <img
              className="socialImg"
              src="images/social/youtube.png"
              alt="youtube"
            />
            <img
              className="socialImg"
              src="images/social/facebook-app-symbol.png"
              alt="facebook"
            />
            <img
              className="socialImg"
              src="images/social/instagram.png"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
