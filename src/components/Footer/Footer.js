import React from 'react';
import './Footer.scss';

const Footer = () => {
  const myaccount = [
    {
      id: 1,
      title: 'Sign In',
    },
    {
      id: 2,
      title: 'Register',
    },
    {
      id: 3,
      title: 'Order Status',
    },
    {
      id: 4,
      title: 'Returns',
    },
  ];

  const help = [
    {
      id: 1,
      title: 'COVID-19 FAQ',
    },
    {
      id: 2,
      title: 'Services',
    },
    {
      id: 3,
      title: 'Ordering',
    },
    {
      id: 4,
      title: 'Shipping Policy',
    },
    {
      id: 5,
      title: 'Returns',
    },
    {
      id: 6,
      title: 'Sizing',
    },
    {
      id: 7,
      title: 'Our Products',
    },
  ];

  const aboutus = [
    {
      id: 1,
      title: 'Our Business',
    },
    {
      id: 2,
      title: 'Media',
    },
    {
      id: 3,
      title: 'Investors',
    },
    {
      id: 4,
      title: 'Strategic Sales',
    },
    {
      id: 5,
      title: 'luluisher Collective',
    },
    {
      id: 6,
      title: 'Sweat Collective',
    },
  ];

  const contactus = [
    {
      id: 1,
      title: 'Live Chat',
    },
    {
      id: 2,
      title: '1.877.263.9300',
    },
    {
      id: 3,
      title: 'Email Sign Up',
    },
  ];

  const giftcards = [
    {
      id: 1,
      title: 'Privacy Policy (Last Updated: 23/5/22)',
    },
    {
      id: 2,
      title: 'Korea Privacy Rights (Last Updated: 23/5/22)',
    },
    {
      id: 3,
      title: 'Korea Transparency Act',
    },
    {
      id: 4,
      title: 'Accessibility Statement',
    },
  ];

  const images = [
    {
      id: 1,
      src: 'images/social/twitter.png',
    },
    {
      id: 2,
      src: 'images/social/pinterest.png',
    },
    {
      id: 3,
      src: 'images/social/youtube.png',
    },
    {
      id: 4,
      src: 'images/social/facebook-app-symbol.png',
    },
    {
      id: 5,
      src: 'images/social/instagram.png',
    },
  ];
  return (
    <footer className="luluFooter">
      <div className="footerWrapper">
        <div className="footerInnerMenu">
          <ul className="footerMenu">
            <li className="footerTitle">MY ACCOUNT</li>
            {myaccount.map(list => {
              return <li key={list.id}>{list.title}</li>;
            })}
          </ul>
          <ul className="footerMenu">
            <li className="footerTitle">HELP</li>
            {help.map(list => {
              return <li key={list.id}>{list.title}</li>;
            })}
          </ul>
          <ul className="footerMenu">
            <li className="footerTitle">ABOUT US</li>
            {aboutus.map(list => {
              return <li key={list.id}>{list.title}</li>;
            })}
          </ul>
          <ul className="footerMenu">
            <li className="footerTitle">SCIENCE OF FEEL</li>
            <li>Product Care</li>
          </ul>
          <ul className="footerMenu">
            <li className="footerTitle">CONTACT US</li>
            {contactus.map(list => {
              return <li key={list.id}>{list.title}</li>;
            })}
          </ul>
          <ul className="footerMenu">
            <li className="footerTitle">CAREERS</li>
            <li className="footerTitle">COMMUNITY</li>
            <li className="footerTitle">SUSTAINABILITY</li>
            <li className="footerTitle">SOCIAL IMPACT</li>
            <li className="footerTitle">DIVERSITY AND INCLUSION</li>
            <li className="footerTitle">LULUISHER APPS</li>
            <li className="footerTitle">SITEMAP</li>
          </ul>
          <ul className="footerMenu">
            <li className="footerTitle">GIFT CARDS</li>
            <li className="footerTitle">STORE LOCATOR</li>
            {giftcards.map(list => {
              return <li key={list.id}>{list.title}</li>;
            })}
          </ul>
          <ul className="footerMenuImg">
            {images.map(img => {
              const { id, src } = img;
              return (
                <img
                  className="socialImg"
                  key={id}
                  src={src}
                  alt="social medias"
                />
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
