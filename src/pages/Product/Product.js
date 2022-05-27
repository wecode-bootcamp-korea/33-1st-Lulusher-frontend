import React, { useEffect, useState, useCallback } from 'react';
import ProductList from './ProductList';
import { AiOutlinePlus } from 'react-icons/ai';
import './Product.scss';
import Footer from '../../components/Footer/Footer';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showSize, setShowSize] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showAct, setShowAct] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [pCategory, setpCategory] = useState('productData');

  useEffect(() => {
    const query = pCategory === 'productData' ? 'productData' : `${pCategory}`;
    fetch(`data/${query}.json`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, [pCategory]);

  const sizeToggle = () => setShowSize(!showSize);
  const colorToggle = () => setShowColor(!showColor);
  const actToggle = () => setShowAct(!showAct);
  const categoryToggle = () => setShowCategory(!showCategory);
  const onSelect = useCallback(pCategory => setpCategory(pCategory), []);
  return (
    <>
      <section className="product">
        <div className="productWrapper">
          <div className="productLeft">
            <div className="productLeftName">
              <h1>Men's Clothes</h1>
            </div>
            <div className="filterContainer">
              <button className="filterDetail">red</button>
              <button className="filterDetail">S</button>
            </div>
            <div className="filterBox">
              <div className="categoryBox">
                <div className="categoryTitle">
                  <h2>Category</h2>
                  <AiOutlinePlus className="plus" onClick={categoryToggle} />
                </div>
                <div className="categoryText">
                  {showCategory &&
                    subCategory.map(c => {
                      const { name, category, id } = c;
                      return (
                        <span
                          className="categoryButton"
                          key={id}
                          onClick={() => onSelect(category)}
                          category={category}
                        >
                          {name}
                        </span>
                      );
                    })}
                </div>
              </div>
              <div className="sizeBox">
                <div className="sizeTitle">
                  <h2> Size </h2>
                  <AiOutlinePlus className="plus" onClick={sizeToggle} />
                </div>

                {showSize && (
                  <div className="sizeBtnBox">
                    {sizeBtn.map(({ id, productsize }) => {
                      return (
                        <button key={id} className="sizeButton">
                          {productsize}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="colorBox">
                <div className="colorTitle">
                  <h2> Color </h2>
                  <AiOutlinePlus className="plus" onClick={colorToggle} />
                </div>

                {showColor &&
                  colorBtn.map(btn => {
                    const { id, btnColor, btnName } = btn;
                    return (
                      <div key={id} className="colorOne">
                        <button className="colorBtnBorder">
                          <button
                            style={{
                              backgroundColor: btnColor,
                            }}
                            className="colorButton"
                          />
                        </button>
                        {btnName}
                      </div>
                    );
                  })}
              </div>
              <div className="activityBox">
                <div className="activityTitle">
                  <h2> Activity </h2>
                  <AiOutlinePlus className="plus" onClick={actToggle} />
                </div>
                {showAct && (
                  <>
                    {activityBtn.map(({ id, activity }) => {
                      return (
                        <div key={id} className="activityOne">
                          <input type="checkbox" />
                          <span>{activity}</span>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="productRight">
            {products.map(product => {
              return <ProductList key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;

const colorBtn = [
  {
    id: 1,
    btnColor: 'red',
    btnName: 'red',
  },
  {
    id: 2,
    btnColor: 'blue',
    btnName: 'blue',
  },
  {
    id: 3,
    btnColor: 'orange',
    btnName: 'orange',
  },
  {
    id: 4,
    btnColor: 'khaki',
    btnName: 'khaki',
  },
  {
    id: 5,
    btnColor: 'black',
    btnName: 'black',
  },
  {
    id: 6,
    btnColor: 'navy',
    btnName: 'navy',
  },
];
const sizeBtn = [
  {
    id: 1,
    productsize: 'S',
  },
  {
    id: 2,
    productsize: 'M',
  },
  {
    id: 3,
    productsize: 'L',
  },
  {
    id: 4,
    productsize: 'XL',
  },
  {
    id: 5,
    productsize: 'XXL',
  },
];

const activityBtn = [
  {
    id: 1,
    activity: 'Casual',
  },
  {
    id: 2,
    activity: 'Running',
  },
  {
    id: 3,
    activity: 'On The Move',
  },
  {
    id: 4,
    activity: 'WorkOut',
  },
  {
    id: 5,
    activity: 'Training',
  },
];

const subCategory = [
  {
    id: 1,
    name: 'Coats & Jackets',
    category: 'pantsData',
  },
  {
    id: 2,
    name: 'Hoodies & Sweatshirts',
    category: 'productData',
  },
  {
    id: 3,
    name: 'Pants',
    category: 'shortsData',
  },
  {
    id: 4,
    name: 'Shirts',
    category: 'pantsData',
  },
  {
    id: 5,
    name: 'Shorts',
    category: 'shortsData',
  },
];
