import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Footer from '../../components/Footer/Footer';
import SignInComponent from './SignIn/SignInComponent';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();

    fetch('http://10.58.3.71:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('Please check your email and password');
          setId('');
          setPw('');
        }
      })
      .then(result => {
        localStorage.setItem('token', result.Access_token);
        alert('WELCOME');
        navigate('/');
      });
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [modal, setModal] = useState(true);

  const isValidEmail = id.includes('@') && id.includes('.');
  const isValidPassword = pw.length >= 8;
  const isValidSignIn = isValidEmail && isValidPassword;

  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="signIn">
      <div className="signInSignUpContainer">
        <div className="title">The good stuff awaits.</div>
        <hr />
        <div className="containers">
          <div className="leftContainer">
            <h1>One account, twice the fun!</h1>
            <div className="borderBottom" />
            <p>Use the same email address for online and in-store!</p>
            <h1>Here are some of the perks</h1>
            <div className="borderBottom" />
            <ul>
              {PERKS_LIST.map(list => {
                const { id, imgSrc, alt, text } = list;
                return (
                  <li key={id}>
                    <img src={imgSrc} alt={alt} />
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rightContainer">
            {modal ? (
              <SignInComponent
                id={id}
                pw={pw}
                handleIdInput={handleIdInput}
                handlePwInput={handlePwInput}
                handleModal={handleModal}
                isValidSignIn={isValidSignIn}
                goToMain={goToMain}
              />
            ) : (
              <SignUp />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;

const PERKS_LIST = [
  {
    id: 1,
    imgSrc: '/signInImages/refund.png',
    alt: 'refund',
    text: 'Fast Track Refunds',
  },
  {
    id: 2,
    imgSrc: '/signInImages/stopwatch.png',
    alt: 'timer',
    text: 'Check out faster',
  },
  {
    id: 3,
    imgSrc: '/signInImages/location.png',
    alt: 'map',
    text: 'Track Orders',
  },
  {
    id: 4,
    imgSrc: '/signInImages/heart.png',
    alt: 'heart',
    text: 'Wish List',
  },
  {
    id: 5,
    imgSrc: '/signInImages/shopping-bag.png',
    alt: 'shoppingbag',
    text: 'Tailored Suggestions',
  },
];
