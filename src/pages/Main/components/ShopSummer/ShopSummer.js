import React from 'react';
import { SHOPSUMMER_LIST } from './ShopSummerData';
import './ShopSummer.scss';

const ShopSummer = () => {
  return (
    <div className="shopSummer">
      {SHOPSUMMER_LIST.map(
        ({ id, src, alt, topphrase, bottomphrase, buttonphrase }) => (
          <div key={id} className="shopSummerCard">
            <img src={src} alt={alt} className="shopSummerImage" />
            <div className="topPhrase">{topphrase}</div>
            <div className="bottomPhrase">{bottomphrase}</div>
            <div className="buttonAlign">
              <button type="button" className="buttonPhrase">
                {buttonphrase}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ShopSummer;
