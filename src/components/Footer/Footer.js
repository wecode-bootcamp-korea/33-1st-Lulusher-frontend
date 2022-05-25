import React from 'react';
import './Footer.scss';
import { FOOTER_LIST, images } from './footerData';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footerWrapper">
        <div className="footerInnerMenu">
          {FOOTER_LIST.map(({ id, title, subtitle }) => {
            return (
              <ul key={id} className="footerMenu">
                <li className="footerTitle">{title}</li>
                {subtitle.map(({ id, name }) => (
                  <li className="footerCategory" key={id}>
                    {name}
                  </li>
                ))}
              </ul>
            );
          })}

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
