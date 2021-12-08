import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [userInputData, setUserInputData] = useState({
    email: '',
    // phone_number: '',
    password: '',
  });

  const { email, phoneNumber, password } = userInputData;
  const addOnUserData = e => {
    const { value, name } = e.target;
    setUserInputData({
      ...userInputData,
      [name]: value,
    });
  };

  const goToMain = () => {
    fetch(`${API.LOGIN}`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        // phone_number: phoneNumber,
        password: password,
      }),
    })
      .then(responese => responese.json())
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          localStorage.setItem('TOKEN', res.TOKEN);
          navigate('/main');
        }
        if (res.message === 'INVALID_USER') {
          alert('유효하지 않은 아이디입니다.');
        }
      });
  };

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
  const phoneNumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const emailValueCheck = emailRegex.test(email);
  const passwordValueCheck = passwordRegex.test(password);
  const phoneNumberValueCheck = phoneNumberRegex.test(phoneNumber);

  const isUserValid =
    (emailValueCheck || phoneNumberValueCheck) && passwordValueCheck;

  return (
    <div className="login">
      <section className="leftWrap">
        <h5 className="title">이메일계정 하나로 충분합니다.</h5>
        <p className="subtitle">
          블로그 서비스 뿐 아니라 다양한 외부 서비스까지
          <br />
          이메일계정 하나로 편리하게 이용해보세요!
        </p>
        <div className="imagesWrap">
          <img src="/images/Login/Branch_login.png" alt="노트북이미지" />
        </div>
      </section>
      <section className="rightWrap">
        <article>
          <h1 className="loginTitle">Email</h1>
          <form className="loginWrap">
            <input
              name="email"
              className={`loginInput${email ? ' lightBorder' : ''}`}
              type="text"
              placeholder="이메일"
              onChange={addOnUserData}
            />
            <input
              name="password"
              className={`loginInput${password ? ' lightBorder' : ''}`}
              type="password"
              placeholder="비밀번호"
              onChange={addOnUserData}
            />
            <button
              className="loginButton"
              type="button"
              disabled={!isUserValid}
              onClick={goToMain}
            >
              로그인
            </button>
          </form>
          <div className="signupWrap">
            <Link to="/signup">
              <p className="signupText">회원가입</p>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Login;
