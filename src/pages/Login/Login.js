import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['./images/Login/login1.png', './images/Login/login2.png'];

  const userIdHandler = e => {
    const { value } = e.target;
    setUserId(value);
  };
  const userPasswordHandler = e => {
    const { value } = e.target;
    setUserPassword(value);
  };

  const navigate = useNavigate();
  const userValidation = userId.includes('@') && userPassword.length >= 5;
  const goToMain = () => {
    navigate('/main');
  };

  function checkboxToggle() {
    setImageIndex(prevIndex => (prevIndex + 1) % images.length);
  }

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
          <img
            src="https://accounts.kakao.com/assets/weblogin/techin/retina/banner_login1-81752909ec9c815794b13ccff4d17d7d3e81f431585ecec30ee7a8055785c74f.png"
            alt="노트북이미지"
          />
        </div>
      </section>
      <section className="rightWrap">
        <article>
          <h1 className="loginTitle">Email</h1>
          <form className="loginWrap">
            <input
              className={userId ? 'loginIdInnerText' : 'loginId'}
              type="text"
              placeholder="이메일, 전화번호"
              value={userId}
              onChange={userIdHandler}
            />
            <input
              className={
                userPassword ? 'loginPasswordInnerText' : 'loginPassword'
              }
              type="password"
              placeholder="비밀번호"
              value={userPassword}
              onChange={userPasswordHandler}
            />
            <div className="loginHolder">
              <img
                className="loginCheckbox"
                src={images[imageIndex]}
                alt="체크박스"
                onClick={checkboxToggle}
              />
              <label>
                <p className="loginCheckboxText">로그인 상태 유지</p>
              </label>
            </div>
            <button
              className="loginButton"
              type="submit"
              disabled={userValidation ? false : true}
              onClick={userValidation ? goToMain : ''}
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
