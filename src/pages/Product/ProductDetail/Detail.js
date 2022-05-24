import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';
import { FaRegHeart, FaRegStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const Detail = () => {
  return (
    <div className="ProductDetail">
      <main className="mainContainer">
        <div>
          <img
            className="mainImg"
            src="https://jb-shop.kr/web/product/medium/20200406/379e3b980ff2b643bc8b03fe208dba82.jpg"
            alt="Shorts"
          />
          <div></div>
        </div>

        <section className="orderArea">
          <ul className="nav">
            <li>
              <Link to="/">Men's Clothes</Link>
            </li>
            <li>
              <Link to="/">Shorts</Link>
            </li>
          </ul>

          <div className="marginBottom">
            <p className="mainTitleFont">Commission Golf Short 10"</p>
            <div className="label">NEW</div>
            <div>
              <span className="price">$169</span>
              <span>USD</span>
            </div>
          </div>

          <div>
            <span className="fontWeightSize marginRight">Color</span>
            <span>White</span>
            <div className="marginBox flex">
              <div className="roundColor marginRight"></div>
              <div className="roundColor marginRight"></div>
              <div className="roundColor marginRight"></div>
            </div>
          </div>

          <div>
            <span className="fontWeightSize marginRight">Select Size</span>
            <div className="marginBox flex">
              <div className="sizeBox center marginRight">S</div>
              <div className="sizeBox center marginRight">M</div>
              <div className="sizeBox center marginRight">L</div>
              <div className="sizeBox center marginRight">XL</div>
            </div>
          </div>

          <button className="addBtn">ADD TO BAG</button>

          <div className="iconBox marginBox">
            <div className="icon">
              <FaRegHeart className="iconSize marginRight" />
              <span className="fontWeightSize">Add to Wish List</span>
            </div>
            <div className="icon">
              <FaRegStar className="iconSize marginRight" />
              <span className="fontWeightSize">Reviews</span>
            </div>
          </div>

          <div className="marginBoxBig">
            <p className="fontWeightSize marginBottom">Details</p>
            <ul>
              <li className="marginBox">
                <img
                  className="detailIcon marginRight"
                  src="/Images/dummy.png"
                  alt="icon"
                />
                <button className="detailBtn">Fit</button>
              </li>
              <li className="marginBox">
                <img
                  className="detailIcon marginRight"
                  src="/Images/thread-spool.png"
                  alt="icon"
                />
                <button className="detailBtn">Material and Care</button>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <div className="paddingRightLeft">
        <ul>
          <li className="marginBottom spaceBetween">
            <div>
              <img
                className="detailIcon marginRightBig"
                src="/Images/dummy.png"
                alt="icon"
              />
              <span className="toggleFontSize">Fit</span>
            </div>
            <FiPlus className="iconSize" />
          </li>
          <li className="marginBottom spaceBetween">
            <div>
              <img
                className="detailIcon marginRightBig"
                src="/Images/thread-spool.png"
                alt="icon"
              />
              <span className="toggleFontSize">Material and Care</span>
            </div>
            <FiPlus className="iconSize" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
