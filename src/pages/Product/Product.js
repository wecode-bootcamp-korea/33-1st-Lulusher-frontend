import React, { useEffect, useState, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import ProductList from './ProductList';
import './Product.scss';

import { useLocation, useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showAct, setShowAct] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [categoryBtn, setCategoryBtn] = useState([]);
  const nextId = useRef(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [filterValue, setFilterValue] = useState({
    categoryValue: '',
    colorValue: '',
    sizeValue: '',
    activityValue: '',
  });

  useEffect(() => {
    fetch(`http://10.58.0.59:8000/products/list${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data.results);
      });
  }, [location.search]);

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  useEffect(() => {
    const queryString = `?${
      filterValue.categoryValue
        ? `${
            filterValue.categoryValue === `all`
              ? ''
              : `category=${filterValue.categoryValue}`
          }`
        : ''
    }
${filterValue.colorValue ? `&color=${filterValue.colorValue}` : ''}${
      filterValue.sizeValue ? `${filterValue.sizeValue}` : ''
    }${filterValue.activityValue ? `${filterValue.activityValue}` : ''}`;
    navigate(queryString);
  }, [filterValue]);

  const onInsert = value => {
    const btn = {
      id: nextId.current,
      value,
    };
    setCategoryBtn(categoryBtn.concat(btn));
    nextId.current += 1;
  };

  // const sortProductsLowPrice = () => {
  //   let newProducts = [...products];
  //   newProducts.sort((a, b) => a.basic_price - b.basic_price);
  //   setProducts(newProducts);
  // };

  // const sortProductsHighPrice = () => {
  //   let newProducts = [...products];
  //   newProducts.sort((a, b) => b.basic_price - a.basic_price);
  //   setProducts(newProducts);
  // };

  const sizeToggle = () => setShowSize(!showSize);
  const colorToggle = () => setShowColor(!showColor);
  const actToggle = () => setShowAct(!showAct);
  const categoryToggle = () => setShowCategory(!showCategory);

  const onCategoryClick = id =>
    setCategoryBtn(categoryBtn.filter(btn => btn.id !== id));
  return (
    <section className="product">
      <div className="productWrapper">
        <div className="productLeft">
          <div className="productLeftName">
            <h1>Men's Clothes</h1>
          </div>
          <div className="filterContainer">
            {categoryBtn.map(({ id, value }) => {
              return (
                <button
                  key={id}
                  onClick={onCategoryClick}
                  className="filterDetail"
                >
                  {value}
                </button>
              );
            })}
          </div>
          <div className="filterBox">
            <div className="categoryBox">
              <div className="categoryTitle">
                <h2>Category</h2>
                <AiOutlinePlus className="plus" onClick={categoryToggle} />
              </div>

              {showCategory &&
                subCategory.map(({ name, category, id }) => {
                  return (
                    <div key={id} className="categoryText">
                      <span className="categoryButton">{name}</span>
                    </div>
                  );
                })}
            </div>
            <div className="sizeBox">
              <div className="sizeTitle">
                <h2> Size </h2>
                <AiOutlinePlus className="plus" onClick={sizeToggle} />
              </div>

              {showSize && (
                <div className="sizeBtnBox">
                  {sizeBtn.map(({ id, productsize, value }) => {
                    return (
                      <button
                        key={id}
                        value={value}
                        onClick={() => {
                          onInsert(value);
                          setActive(!active);
                        }}
                        active={active}
                        className={active ? 'sizeButton' : 'selectedSizeButton'}
                      >
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
                  const { id, btnColor, btnName, value } = btn;
                  return (
                    <div key={id} className="colorOne">
                      <button className="colorBtnBorder">
                        <button
                          style={{
                            backgroundColor: btnColor,
                          }}
                          className="colorButton"
                          onClick={() => onInsert(value)}
                          value={value}
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
                  {activityBtn.map(({ id, activity, value }) => {
                    return (
                      <div key={id} className="activityOne" value={value}>
                        <input
                          onClick={() => onInsert(value)}
                          type="checkbox"
                        />
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
          <div className="productBanner">
            <img
              className="bannerImg"
              src="images/product/manclothes.jpg"
              alt="product banner"
            />
            <p className="bannerText">Adaptability that knows no bounds.</p>
          </div>
          <div className="productList">
            <span className="itemNumber">All Items ({products.length})</span>
            <div className="productSortBox">
              <span>Sort by </span>
              <select className="productSort">
                <option value="">Featured</option>
                <option value="top">Top Rated</option>
                <option value="high">Price: High to Low</option>
                <option value="low">Price: Low to High</option>
              </select>
            </div>
          </div>

          {products.map(product => {
            return <ProductList key={product.product_id} product={product} />;
          })}
        </div>
      </div>
    </section>
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
    activity: 'Swim',
    value: 'Swim',
  },
  {
    id: 2,
    activity: 'Golf',
    value: 'Golf',
  },
  {
    id: 3,
    activity: 'Running',
    value: 'Running',
  },
  {
    id: 4,
    activity: 'Yoga',
    value: 'Yoga',
  },
];

const subCategory = [
  {
    id: 1,
    name: 'Joggerss',
    category: 'Joggerss',
  },
  {
    id: 2,
    name: 'Leggings',
    category: 'Leggings',
  },
  {
    id: 3,
    name: 'Trousers',
    category: 'Trousers',
  },
  {
    id: 4,
    name: 'Bodysuits',
    category: 'Bodysuits',
  },
  {
    id: 5,
    name: 'T-shirts',
    category: 'T-shirts',
  },
];
