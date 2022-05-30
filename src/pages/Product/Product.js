import React, { useEffect, useState, useCallback } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import ProductList from './ProductList';
import Footer from '../../components/Footer/Footer';
import './Product.scss';

const Product = () => {
  const [products, setProducts] = useState([]);

  const [showSize, setShowSize] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showAct, setShowAct] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [productCategory, setProductCategory] = useState('productData');
  const [sort, setSort] = useState();

  useEffect(() => {
    const query =
      productCategory === 'productData' ? 'productData' : `${productCategory}`;
    fetch(`data/${query}.json`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, [productCategory]);
  const sizeToggle = () => setShowSize(!showSize);
  const colorToggle = () => setShowColor(!showColor);
  const actToggle = () => setShowAct(!showAct);
  const categoryToggle = () => setShowCategory(!showCategory);
  const onSelect = useCallback(pCategory => setProductCategory(pCategory), []);

  return (
    <>
      <section className="product">
        <div className="productWrapper">
          <div className="productLeft">
            <div className="productLeftName">
              <h1>Men's Clothes</h1>
            </div>
            <div className="filterContainer">
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
                    subCategory.map(({ name, category, id }) => {
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
            <div className="productList">
              <span>All Items ({products.length})</span>
            </div>
            <select
              onChange={e => {
                setSort(e.target.value);
              }}
            >
              <option value="">Featured</option>
              <option value="top">Top Rated</option>
              <option value="high">Price: High to Low</option>
              <option value="low">Price: Low to High</option>
            </select>
            {products.map(product => {
              return (
                <ProductList key={product.id} product={product} sort={sort} />
              );
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
    value: 'red',
  },
  {
    id: 2,
    btnColor: 'blue',
    btnName: 'blue',
    value: 'blue',
  },
  {
    id: 3,
    btnColor: 'orange',
    btnName: 'orange',
    value: 'orange',
  },
  {
    id: 4,
    btnColor: 'khaki',
    btnName: 'khaki',
    value: 'khaki',
  },
  {
    id: 5,
    btnColor: 'black',
    btnName: 'black',
    value: 'black',
  },
  {
    id: 6,
    btnColor: 'navy',
    btnName: 'navy',
    value: 'navy',
  },
];
const sizeBtn = [
  {
    id: 1,
    productsize: 'S',
    value: 'S',
  },
  {
    id: 2,
    productsize: 'M',
    value: 'M',
  },
  {
    id: 3,
    productsize: 'L',
    value: 'L',
  },
  {
    id: 4,
    productsize: 'XL',
    value: 'XL',
  },
  {
    id: 5,
    productsize: 'XXL',
    value: 'XXL',
  },
];

const activityBtn = [
  {
    id: 1,
    activity: 'Casual',
    value: 'Casual',
  },
  {
    id: 2,
    activity: 'Running',
    value: 'Casual',
  },
  {
    id: 3,
    activity: 'On The Move',
    value: 'On The Move',
  },
  {
    id: 4,
    activity: 'WorkOut',
    value: 'WorkOut',
  },
  {
    id: 5,
    activity: 'Training',
    value: 'WorkOut',
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
