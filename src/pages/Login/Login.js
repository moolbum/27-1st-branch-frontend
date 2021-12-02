import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const CHECKBOX_IMG_LIST = [
  './images/Login/login1.png',
  './images/Login/login2.png',
];

function Login() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isChecked, setIsChecked] = useState(0);

  const navigate = useNavigate();
  const goToMain = () => {
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

  const isUserValid =
    Number(userId.length) === 11 ||
    (userId.includes('@') && userPassword.length >= 5);

  const setCookie = (name, value, days = 7, path = '/') => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie =
      name +
      '=' +
      encodeURIComponent(value) +
      '; expires=' +
      expires +
      '; path=' +
      path;
  };

  // const getCookie = name => {
  //   return document.cookie.split('; ').reduce((r, v) => {
  //     const parts = v.split('=');
  //     return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  //   }, '');
  // };

  // const deleteCookie = name => {
  //   setCookie(name, '', -1);
  // };

  const handlecheckboxToggle = () => {
    setIsChecked(prevIndex => (prevIndex + 1) % CHECKBOX_IMG_LIST.length);
    setCookie('Id', userId, 7);
    setCookie('Password', userPassword, 7);
    setCookie('button', true, 7);
  };

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
            <div className="loginHolder">
              <img
                className="loginCheckbox"
                src={CHECKBOX_IMG_LIST[isChecked]}
                alt="체크박스"
                onClick={handlecheckboxToggle}
              />
              <label>
                <p className="loginCheckboxText">로그인 상태 유지</p>
              </label>
            </div>
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
            {/* <Link>
              <p className="membershipText">비밀번호 찾기</p>
            </Link> */}
          </div>
        </article>
      </section>
    </div>
  );
}

export default Login;
