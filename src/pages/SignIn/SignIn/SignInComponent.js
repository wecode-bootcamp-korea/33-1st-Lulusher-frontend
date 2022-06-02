import React from 'react';
import './SignInComponent.scss';

const SignInComponent = ({
  id,
  pw,
  handleIdInput,
  handlePwInput,
  handleModal,
  isValidSignIn,
  goToMain,
}) => {
  return (
    <div className="signInContainer">
      <h1>Sign in to your account</h1>
      <div className="borderBottom" />
      <div className="signInWrapper">
        <form>
          <label>
            Email address
            <input type="text" onChange={handleIdInput} value={id} required />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={handlePwInput}
              value={pw}
              required
            />
          </label>
          <a href="#!">Forgot your password?</a>
          <button
            className={
              isValidSignIn ? 'signInBtnActivated' : 'signInBtnDeActivated'
            }
            onClick={goToMain}
          >
            SIGN IN
          </button>
        </form>
        <hr />
      </div>
      <div
        className="clickToRegister"
        onClick={() => {
          handleModal();
        }}
      >
        <h1>Create a luluisher account</h1>
      </div>
    </div>
  );
};

export default SignInComponent;
