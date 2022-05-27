import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };
  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };
  const handleAddressInput = e => {
    setAddress(e.target.value);
  };
  const handleTelInput = e => {
    setTel(e.target.value);
  };
  const handleCheckInput = e => {
    setChecked(!isChecked);
  };

  const isValidEmail = id.includes('@') && id.includes('.');
  const isValidPassword = pw.length >= 8;
  const isValidAddress = address.length >= 10;
  const isValidSignUp = isValidEmail && isValidPassword && isValidAddress;

  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.5.116:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        name: username,
        address: address,
        mobile_number: tel,
        email_subscribe: isChecked,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('Please check your form again');
        }
      })
      .then(result => {
        alert('WELCOME to Luluisher!');
        navigate('/');
      });
  };

  return (
    <div className="signUpContainer">
      <h1>Create a luluisher account</h1>
      <div className="borderBottom" />
      <div className="signUpWrapper">
        <form>
          <label>
            Email Address
            <input type="text" value={id} onChange={handleIdInput} required />
          </label>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={handleUsernameInput}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={pw}
              onChange={handlePwInput}
              required
            />
          </label>
          <p>8 characters or longer required</p>
          <label>
            Shipping Address
            <input
              type="text"
              value={address}
              onChange={handleAddressInput}
              required
            />
          </label>
          <label>
            Phone Number
            <input type="tel" value={tel} onChange={handleTelInput} required />
          </label>
          <label>
            <input
              type="checkbox"
              className="subscribeCheck"
              checked={!isChecked}
              value={isChecked}
              onChange={handleCheckInput}
            />
            Sign me up for luluisher emails (you can unsubscribe at any time).
          </label>
          <button
            className={
              isValidSignUp ? 'signUpBtnActivated' : 'signUpBtnDeActivated'
            }
            onClick={signUp}
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
