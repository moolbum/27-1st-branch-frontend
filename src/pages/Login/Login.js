import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigate = useNavigate();
  const goToMain = e => {
    navigate('/main');
  };

  const handleUserId = e => {
    const { value } = e.target;
    setUserId(value);
  };

  const handleUserPassword = e => {
    const { value } = e.target;
    setUserPassword(value);
  };

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const phoneNumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const emailValueCheck = emailRegex.test(userId);
  const passwordValueCheck = passwordRegex.test(userPassword);
  const phoneNumberValueCheck = phoneNumberRegex.test(userId);

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
              className={userId ? 'loginInput ' : 'loginInputChange'}
              type="text"
              placeholder="이메일, 전화번호"
              value={userId}
              onChange={handleUserId}
            />
            <input
              className={userPassword ? 'loginInput ' : 'loginInputChange'}
              type="password"
              placeholder="비밀번호"
              value={userPassword}
              onChange={handleUserPassword}
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
