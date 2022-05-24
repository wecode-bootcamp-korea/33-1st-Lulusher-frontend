import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    isValidSignIn
      ? navigate('/')
      : isValidEmail
      ? alert('Please Check Your Password!')
      : alert('Please Check Your Email!');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const isValidEmail = id.includes('@') && id.includes('.');
  const isValidPassword = pw.length >= 8;
  const isValidSignIn = isValidEmail && isValidPassword;

  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };

  return (
    <div className="signIn">
      <div className="title">The good stuff awaits.</div>
      <hr />
      <div className="containers">
        <div className="leftContainer">
          <h1>One account, twice the fun!</h1>
          <div className="borderBottom" />
          <p>Use the same email address for online and in-store!</p>
          <br />
          <h1>Here are some of the perks</h1>
          <div className="borderBottom" />
          <ul>
            <li>
              <img src="/signInImages/refund.png" alt="refund" />
              Fast Track Refunds
            </li>
            <li>
              <img src="/signInImages/stopwatch.png" alt="timer" />
              Check out faster
            </li>
            <li>
              <img src="/signInImages/location.png" alt="map" />
              Track Orders
            </li>
            <li>
              <img src="/signInImages/heart.png" alt="heart" />
              Wish List
            </li>
            <li>
              <img src="/signInImages/shopping-bag.png" alt="shoppingbag" />
              Tailored Suggestions
            </li>
          </ul>
        </div>
        <div className="rightContainer">
          <div className="signInContainer">
            <h1>Sign in to your account</h1>
            <div className="borderBottom" />
            <div className="signInWrapper">
              <form>
                <label for="email">Email address</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleIdInput}
                  value={id}
                  required
                />
                <label for="pw">Password</label>
                <input
                  type="password"
                  name="pw"
                  onChange={handlePwInput}
                  value={pw}
                  required
                />
                <a href="#!">Forgot your password?</a>
                <button
                  type="submit"
                  className={
                    isValidSignIn
                      ? 'signInBtnActivated'
                      : 'signInBtnDeActivated'
                  }
                  onClick={goToMain}
                >
                  SIGN IN
                </button>
              </form>
              <br />
              <hr />
              <br />
            </div>
          </div>
          {/* <div className="clickToRegister">
            <h1>Create a luluisher account</h1>
          </div> */}
          <div className="signUpContainer">
            <h1>Create a luluisher account</h1>
            <div className="borderBottom" />
            <div className="signUpWrapper">
              <form>
                <label for="email">Email address</label>
                <input type="text" id="email" required />
                <label for="pw">Password</label>
                <input type="password" id="pw" required />
                <ul>
                  <li>8 characters</li>
                  <li>1 uppercase</li>
                  <li>1 lowercase</li>
                  <li>1 digit</li>
                </ul>
                <label for="subscribe">
                  <input
                    type="checkbox"
                    id="subscribe"
                    className="subscribeCheck"
                  />
                  Sign me up for luluisher emails (you can unsubscribe at any
                  time).
                </label>
                <button type="submit">CREATE ACCOUNT</button>
                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
