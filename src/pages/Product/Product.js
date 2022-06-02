import React, { useEffect, useState, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import ProductList from './ProductList';
import './Product.scss';

import { useLocation, useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  // select, not
  // what size select?
  // 1 => 2,3,4,5
  const [showSize, setShowSize] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showAct, setShowAct] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [categoryBtn, setCategoryBtn] = useState([]);
  const [query, setQuery] = useState(9);

  const nextId = useRef(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [filterValue, setFilterValue] = useState({
    categoryValue: '',
    colorValue: '',
    sizeValue: '',
    activityValue: '',
    offValue: 'offset=0&limit=9',
    sortValue: '',
  });

  useEffect(() => {
    fetch(`http://10.58.3.71:8000/products/list${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data.results);
      });
  }, [location.search]);

  useEffect(() => {
    const queryString = `?${
      filterValue.categoryValue
        ? `${
            filterValue.categoryValue === `all`
              ? ''
              : `sub_category=${filterValue.categoryValue}`
          }`
        : ''
    }
${filterValue.colorValue ? `&color=${filterValue.colorValue}` : ''}${
      filterValue.sizeValue ? `&size=${filterValue.sizeValue}` : ''
    }${
      filterValue.activityValue ? `&activity=${filterValue.activityValue}` : ''
    }${filterValue.offValue ? `&${filterValue.offValue}` : ''}${
      filterValue.sortValue ? `&sort=${filterValue.sortValue}` : ''
    }`;
    navigate(queryString);
  }, [filterValue, navigate]);

  const onColor = value => {
    setFilterValue(prev => {
      return { ...prev, colorValue: value };
    });
  };

  const onCategory = value => {
    setFilterValue(prev => {
      return { ...prev, categoryValue: value };
    });
    setFilterValue(prev => {
      return { ...prev, offValue: `offset=0&limit=9` };
    });
    setQuery(9);
  };

  const onSize = value => {
    setFilterValue(prev => {
      return { ...prev, sizeValue: value };
    });
  };

  const onActivity = value => {
    setFilterValue(prev => {
      return { ...prev, activityValue: value };
    });
  };

  const onInsert = value => {
    const btn = {
      id: nextId.current,
      value,
    };
    setCategoryBtn(categoryBtn.concat(btn));
    nextId.current += 1;
  };

  const onSort = e => {
    setFilterValue(prev => {
      return { ...prev, sortValue: e.target.value };
    });
  };

  const getBtnIndex = () => {
    setQuery(query => query + 9);
    const limit = query;
    const offset = 0;
    const queryString = `offset=${offset}&limit=${limit}`;
    setFilterValue(prev => {
      return { ...prev, offValue: queryString };
    });
  };

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
            <h1>
              {filterValue.categoryValue === ''
                ? "Men's Clothes"
                : `Men's ${filterValue.categoryValue}`}
            </h1>
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
                      <span
                        className="categoryButton"
                        onClick={() => {
                          onCategory(category);
                        }}
                      >
                        {name}
                      </span>
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
                          onSize(value);
                        }}
                        className={
                          productsize === filterValue.sizeValue
                            ? 'selectedSizeButton'
                            : 'sizeButton'
                        }
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
                          onClick={() => {
                            onInsert(value);
                            onColor(value);
                          }}
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
                          onClick={() => {
                            onInsert(value);
                            onActivity(value);
                          }}
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

              <select className="productSort" onChange={e => onSort(e)}>
                <option value="">Featured</option>
                <option value="name">Name: A to Z</option>
                <option value="price">Price: High to Low</option>
                <option value="-price">Price: Low to High</option>
              </select>
            </div>
          </div>

          {products.map(product => {
            return <ProductList key={product.product_id} product={product} />;
          })}
          <div className="paginationBox">
            <button
              className="pagination"
              onClick={() => {
                getBtnIndex(9);
              }}
            >
              View More Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

const colorBtn = [
  {
    id: 1,
    btnColor: 'black',
    btnName: 'black',
    value: 'black',
  },
  {
    id: 2,
    btnColor: 'white',
    btnName: 'white',
    value: 'white',
  },
  {
    id: 3,
    btnColor: 'orange',
    btnName: 'orange',
    value: 'orange',
  },
  {
    id: 4,
    btnColor: 'pink',
    btnName: 'pink',
    value: 'pink',
  },
  {
    id: 5,
    btnColor: 'lemon',
    btnName: 'lemon',
    value: 'lemon',
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
    name: 'All',
    category: '',
  },
  {
    id: 2,
    name: 'Joggers',
    category: 'Joggerss',
  },
  {
    id: 3,
    name: 'Leggings',
    category: 'Leggings',
  },
  {
    id: 4,
    name: 'Trousers',
    category: 'Trousers',
  },
  {
    id: 5,
    name: 'Bodysuits',
    category: 'Bodysuits',
  },
  {
    id: 6,
    name: 'T-shirts',
    category: 'T-shirts',
  },
];
