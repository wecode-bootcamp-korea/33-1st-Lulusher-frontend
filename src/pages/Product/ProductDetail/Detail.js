import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';
import { FaRegHeart, FaRegStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import './Detail.scss';

const Detail = ({ scrollToReview }) => {
  const [fitToggle, setFitToggle] = useState(false);
  const [materialToggle, setMaterialToggle] = useState(false);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [amount, setAmount] = useState(1);
  const [productModal, setProductModal] = useState(false);

  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/productDetail.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProduct(data);
  //     });
  // }, []);

  // console.log('print', product[0].price);

  // const addToBag = () => {
  //   let token = localStorage.getItem('token') || '';
  //   fetch('url주소', {
  //     headers: {
  //       Authorization: token,
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       color: color,
  //       size: size,
  //       amount: amount,
  //     }),
  //   });
  // };

  const addToBag = () => {
    if (color.length <= 0 || size.length <= 0) {
      alert('옵션을 선택해 주세요');
    } else {
      setProductModal(true);
      setColor('');
      setSize('');
    }
  };
  console.log('color', color.length);
  console.log('size', size);

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

  const clickSize = e => {
    let clickedSize = e.target.innerHTML;
    setSize(clickedSize);
  };

  console.log('모달', productModal);

  const goToReview = () => {
    scrollToReview.current.scrollIntoView({ behavior: 'smooth' });
  };

  const PRODUCT = [
    {
      productId: 1,
      productTitle: 'Commission Golf Short 10',
      type: 'new',
      price: 169,
      color: ['white', 'pink', 'gray'],
      size: ['XS', 'S', 'M', 'L', 'XL'],
    },
  ];

  return (
    <div className="Detail">
      {productModal ? <ProductModal setProductModal={setProductModal} /> : null}
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
            <p className="mainTitleFont">Commission Golf Short 10</p>
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
              {PRODUCT[0].color.map(ele => {
                return (
                  <div
                    className="roundColor"
                    style={{ backgroundColor: ele }}
                    onClick={clickColor}
                  ></div>
                );
              })}
              {/* <div className="roundColor"></div>
              <div className="roundColor"></div>
              <div className="roundColor"></div> */}
            </div>
          </div>

          <div>
            <span className="sectionTitle">Select Size</span>
            <div className="sizeBox">
              {PRODUCT[0].size.map(el => {
                return (
                  <div className="size" onClick={clickSize}>
                    {el}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="quantityBox">
            <span className="sectionTitle">Quantity</span>
            <div className="sizeBox">
              <button
                disabled={amount === 1}
                onClick={() => setAmount(amount - 1)}
              >
                -
              </button>
              {amount}
              <button onClick={() => setAmount(amount + 1)}>+</button>
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

          {/* <div className="detailBox">
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
          </div> */}
        </section>
      </main>

      <div className="paddingRightLeft">
        <ul>
          <li className="liArea">
            <div>
              <img
                className="detailIcon marginRightBig"
                src="/Images/ProductDetail/dummy.png"
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
                src="/Images/ProductDetail/thread-spool.png"
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
