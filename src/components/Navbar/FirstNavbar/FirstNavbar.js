import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaStore,
  FaRegUserCircle,
  FaRegHeart,
  FaGift,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';
import './FirstNavbar.scss';

const FirstNavbar = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/login');
  };

  // useEffect(() => {
  //   fetch('http://10.58.0.59:8000/', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setItemList(data.results);
  //     });
  // }, []);

  const signOut = () => {
    const isSignIn = localStorage.getItem('token');
    if (isSignIn) {
      localStorage.clear();
      navigate('/');
    } else {
      navigate('/users/signin');
    }
  };

  return (
    <div className="firstNavbar">
      <div className="firstNav">
        <div>
          <FaStore />
          <p>Store Locator</p>
        </div>
        {localStorage.getItem('token') ? (
          <div className="myAccount">
            <div>
              <FaRegUserCircle />
              <p>My Account</p>
              <ul>
                <li>Hi, nice to see you.</li>
                <li>
                  Profile <FaArrowRight />
                </li>
                <li>
                  Wish List <FaArrowRight />
                </li>
                <li onClick={signOut}>Sign Out</li>
              </ul>
            </div>
          </div>
        ) : (
          <div onClick={goToSignIn}>
            <FaRegUserCircle />
            <p>Sign in</p>
          </div>
        )}
        <div>
          <FaRegHeart />
          <p>Wish List</p>
        </div>
        <div>
          <FaGift />
          <p>Gift Card</p>
        </div>
        <div>
          <FaMapMarkerAlt />
          <p>USA</p>
        </div>
      </div>
    </div>
  );
};

export default FirstNavbar;
