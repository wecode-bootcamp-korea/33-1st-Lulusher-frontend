import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';
import GrayCard from './GrayCard';
import { FaRegHeart, FaRegStar } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Detail.scss';

const Detail = ({ scrollToReview, product }) => {
  const [fitToggle, setFitToggle] = useState(false);
  const [materialToggle, setMaterialToggle] = useState(false);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [amount, setAmount] = useState(1);
  const [productModal, setProductModal] = useState(false);
  const [img, setImg] = useState(
    product.product_options[0]?.product_option_images[0]
  );

  const productSizeObj = {
    XS: 0,
    S: 1,
    M: 2,
    L: 3,
    XL: 4,
  };

  const colorArr = [];
  for (let i = 0; i < product.product_options?.length; i++) {
    if (!colorArr.includes(product.product_options[i].color)) {
      colorArr.push(product.product_options[i].color);
    }
  }

  const sizeArr = [];
  const sizeNumArr = [];
  const sortSize = [];

  for (let i = 0; i < product.product_options?.length; i++) {
    if (!sizeArr.includes(product.product_options[i].size)) {
      sizeArr.push(product.product_options[i].size);
    }
  }

  for (let i = 0; i < sizeArr.length; i++) {
    for (let key in productSizeObj) {
      if (key === sizeArr[i]) {
        sizeNumArr.push(productSizeObj[key]);
      }
    }
  }

  sizeNumArr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sizeNumArr.length; i++) {
    for (let key in productSizeObj) {
      if (sizeNumArr[i] === productSizeObj[key]) {
        sortSize.push(key);
      }
    }
  }

  const addToBag = () => {
    if (color.length <= 0 || size.length <= 0) {
      alert('옵션을 선택해 주세요');
    } else {
      setProductModal(true);
    }
  };

  const fitToggleBoolean = () => {
    setFitToggle(!fitToggle);
  };

  const materialToggleBoolean = () => {
    setMaterialToggle(!materialToggle);
  };

  const clickColor = e => {
    let clickedColor = e.target.style.backgroundColor;
    setColor(clickedColor);
  };

  const changeClothesColor = color => {
    product.product_options.forEach(option => {
      if (color === option.color) {
        setImg(option.product_option_images);
      }
    });
  };

  const clickSize = e => {
    let clickedSize = e.target.innerHTML;
    setSize(clickedSize);
  };

  const goToReview = () => {
    scrollToReview.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="detail">
      {productModal ? (
        <ProductModal
          setProductModal={setProductModal}
          color={color}
          setColor={setColor}
          size={size}
          setSize={setSize}
          amount={amount}
          setAmount={setAmount}
          product={product}
        />
      ) : null}
      <main className="mainContainer">
        <div>
          <img className="mainImg" src={img} alt="Shorts" />
        </div>

        <section className="orderArea">
          <ul className="nav">
            <li>{product.menu}</li>
            <li>{product.main_category}</li>
            <li>{product.sub_category}</li>
          </ul>

          <div className="titlePriceBox">
            <p className="mainTitleFont">{product.name}</p>
            <div className="labelBox">
              {product.is_new && <div className="label">New</div>}
              {product.is_bestsellers && <div className="label">Best</div>}
              {product.summer_clothes_shop && (
                <div className="label">Summer</div>
              )}
            </div>

            <div>
              <span className="price">${product.original_price}</span>
              <span>USD</span>
            </div>
          </div>

          <div>
            <span className="sectionTitle">Color</span>
            <span>{color}</span>
            <div className="colorBox">
              {colorArr.map((el, idx) => {
                return (
                  <div
                    className={color === el ? 'clickedBox' : null}
                    onClick={() => changeClothesColor(el)}
                    key={idx}
                  >
                    <div
                      className="roundColor"
                      style={{ backgroundColor: el }}
                      onClick={e => {
                        clickColor(e);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <span className="sectionTitle">Select Size</span>
            <div className="sizeBox">
              {sortSize?.map((el, idx) => {
                return (
                  <div
                    className={'size ' + (el === size ? 'clickedSize' : null)}
                    onClick={clickSize}
                    key={idx}
                  >
                    {el}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="quantityBox">
            <span className="sectionTitle">Quantity</span>
            <div>
              <button
                className="quantityBtn"
                disabled={amount === 1}
                onClick={() => setAmount(amount - 1)}
              >
                -
              </button>
              {amount}
              <button
                className="quantityBtn"
                disabled={amount > 4}
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button className="addBtn" onClick={addToBag}>
            ADD TO BAG
          </button>

          <div className="iconBox">
            <div className="icon">
              <FaRegHeart />
              <span>Add to Wish List</span>
            </div>
            <div onClick={goToReview} className="icon">
              <FaRegStar />
              <span>Reviews</span>
            </div>
          </div>
        </section>
      </main>

      <div className="paddingRightLeft">
        <ul>
          <li className="liArea">
            <div className="toggleBox">
              <img
                className="detailIcon marginRightBig"
                src="/Images/ProductDetail/dummy.png"
                alt="icon"
              />
              <span className="toggleFontSize">Fit</span>
            </div>
            {fitToggle ? (
              <FiMinus className="iconSize" onClick={fitToggleBoolean} />
            ) : (
              <FiPlus className="iconSize" onClick={fitToggleBoolean} />
            )}
          </li>
          <div className={fitToggle ? 'showDetail' : 'hideDetail'}>
            <GrayCard />
          </div>
          <li className="liArea">
            <div className="toggleBox">
              <img
                className="detailIcon"
                src="/Images/ProductDetail/sewing-tools.png"
                alt="icon"
              />
              <span className="toggleFontSize">Material and Care</span>
            </div>
            {materialToggle ? (
              <FiMinus className="iconSize" onClick={materialToggleBoolean} />
            ) : (
              <FiPlus className="iconSize" onClick={materialToggleBoolean} />
            )}
          </li>
          <div className={materialToggle ? 'showDetail' : 'hideDetail'}>
            <div>
              <div className="cardTitle">Materials</div>
              <GrayCard />
            </div>

            <div>
              <div className="cardTitle">Care</div>
              <GrayCard />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
