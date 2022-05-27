import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';
import { FaRegHeart, FaRegStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const Detail = () => {
  const [fitToggle, setFitToggle] = useState(false);
  const [materialToggle, setMaterialToggle] = useState(false);
  const [count, setCount] = useState(1);

  const fitToggleBoolean = () => {
    setFitToggle(!fitToggle);
  };

  const materialToggleBoolean = () => {
    setMaterialToggle(!materialToggle);
  };

  return (
    <div className="Detail">
      <main className="mainContainer">
        <div>
          <img
            className="mainImg"
            src="https://jb-shop.kr/web/product/medium/20200406/379e3b980ff2b643bc8b03fe208dba82.jpg"
            alt="Shorts"
          />

          {/* <div className="smallClothesBox">
            <div className="smallClothes"></div>
            <div className="smallClothes"></div>
            <div className="smallClothes"></div>
          </div> */}
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

          <div className="titlePriceBox">
            <p className="mainTitleFont">Commission Golf Short 10"</p>
            <div className="label">NEW</div>
            <div>
              <span className="price">$169</span>
              <span>USD</span>
            </div>
          </div>

          <div>
            <span className="sectionTitle">Color</span>
            <span>White</span>
            <div className="colorBox">
              <div className="roundColor"></div>
              <div className="roundColor"></div>
              <div className="roundColor"></div>
            </div>
          </div>

          <div>
            <span className="sectionTitle">Select Size</span>
            <div className="sizeBox">
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
              <div className="size">XL</div>
            </div>
          </div>

          <button className="addBtn">ADD TO BAG</button>

          <div className="iconBox">
            <div className="icon">
              <FaRegHeart />
              <span>Add to Wish List</span>
            </div>
            <div className="icon">
              <FaRegStar />
              <span>Reviews</span>
            </div>
          </div>

          <div className="detailBox">
            <p className="sectionTitle">Details</p>
            <ul className="detailItem">
              <li className="detailItem">
                <img
                  className="detailIcon"
                  src="/Images/dummy.png"
                  alt="icon"
                />
                <button className="detailBtn">Fit</button>
              </li>
              <li className="detailItem">
                <img
                  className="detailIcon"
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
          <li className="liArea">
            <div>
              <img
                className="detailIcon marginRightBig"
                src="/Images/dummy.png"
                alt="icon"
              />
              <span className="toggleFontSize">Fit</span>
            </div>
            <FiPlus className="iconSize" onClick={fitToggleBoolean} />
          </li>
          <div className={fitToggle ? 'showDetail' : 'hideDetail'}>
            <div>반바지 아웃핏</div>
          </div>
          <li className="liArea">
            <div>
              <img
                className="detailIcon marginRightBig"
                src="/Images/thread-spool.png"
                alt="icon"
              />
              <span className="toggleFontSize">Material and Care</span>
            </div>
            <FiPlus className="iconSize" onClick={materialToggleBoolean} />
          </li>
          <div className={materialToggle ? 'showDetail' : 'hideDetail'}>
            <div>반바지 소재</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
