import React, { useState } from 'react';
import './Signup.scss';

function Signup() {
  const [userInfomation, setUserInfomation] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    phone_number: '',
    github: '',
    profile_photo: '',
    description: '',
    position: '',
  });
  const userNameInput = e => {
    setUserInfomation({
      name: e.target.value,
    });
  };
  const userNickNameInput = e => {
    setUserInfomation({
      nickname: e.target.value,
    });
  };
  const userEmailInput = e => {
    setUserInfomation({
      email: e.target.value,
    });
  };
  const userPasswordInput = e => {
    setUserInfomation({
      password: e.target.value,
    });
  };
  const userPhoneNumberInput = e => {
    setUserInfomation({
      phone_number: e.target.value,
    });
  };
  const userGithubInput = e => {
    setUserInfomation({
      github: e.target.value,
    });
  };
  const userProfilePhotoInput = e => {
    setUserInfomation({
      profile_photo: e.target.value,
    });
  };
  const userDescriptionInput = e => {
    setUserInfomation({
      description: e.target.value,
    });
  };
  const userPositionInput = e => {
    setUserInfomation({
      position: e.target.value,
    });
  };

  const checkPassword = password => {
    let regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!regExp.test(password.target.value)) {
      alert('비밀번호 형식이 올바르지 않습니다!');
      password.target.value = '';
      return false;
    }
    return true;
  };

  const checkEmail = email => {
    let regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!regExp.test(email.target.value)) {
      alert('이메일 형식이 올바르지 않습니다!');
      email.target.value = '';
      return false;
    }
    return true;
  };

  const checkCellPhone = e => {
    let regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!regExp.test(e.target.value)) {
      alert('전화번호 형식이 올바르지 않습니다!');
      e.target.value = '';
      return false;
    }
    return true;
  };

  return (
    <div className="signup">
      <h1 className="title">branch</h1>
      <div className="signupWrap">
        <div className="line" />
        <div className="subtitleWrap">
          <h2 className="subtitle">
            브랜치계정으로 사용할
            <br />
          </h2>
          <h2 className="subtitle">이메일을 만들어 주세요.</h2>
        </div>
        <form>
          <p className="essentialValue">* 필수입력</p>
          <input
            name="profile_photo"
            className="profile"
            id="chooseFile"
            type="file"
            onChange={userProfilePhotoInput}
          />
          <label className="profileUplode" for="chooseFile">
            <img
              className="profilePicture"
              src="./images/Signup/profile.png"
              alt="프로필"
            />
          </label>

          <input
            name="name"
            className="inputIdformat"
            type="text"
            placeholder="* 이름 입력"
            onChange={userNameInput}
          />
          <input
            name="nickname"
            className="inputIdformat"
            type="text"
            placeholder="* 닉네임 입력"
            onChange={userNickNameInput}
          />
          <input
            name="email"
            className="inputIdformat"
            type="text"
            placeholder="* 이메일 입력"
            onChange={userEmailInput}
            onBlur={checkEmail}
          />
          <input
            name="password"
            className="inputIdformat"
            type="password"
            placeholder="* 비밀번호 입력"
            onChange={userPasswordInput}
            onBlur={checkPassword}
          />

          <p className="passwordInfomation">
            특수문자, 대문자 , 소문자, 숫자 포함 8자리 이상
          </p>

          <input
            name="phone_number"
            className="inputIdformat"
            type="text"
            placeholder="* 핸드폰번호 입력 ('-') 제외"
            onChange={userPhoneNumberInput}
            onBlur={checkCellPhone}
          />
          <input
            name="github"
            className="inputIdformat"
            type="text"
            placeholder="github 아이디 입력"
            onChange={userGithubInput}
          />
          <input
            name="description"
            className="inputIdformat"
            type="text"
            placeholder="소개"
            onChange={userDescriptionInput}
          />
          <input
            name="position"
            className="inputIdformat"
            type="text"
            placeholder="개발직군 ex) 프론트엔드,백엔드"
            onChange={userPositionInput}
          />

          <ul className="footerTextWrap">
            <li className="footerText">
              입력한 이메일로 브랜치계정에 로그인할 수 있습니다.
            </li>
            <li className="footerText">
              한번 만든 이메일은 변경할 수 없으니, 오타가 없도록 신중히
              확인해주세요.
            </li>
          </ul>
          <button className="signupSubmit" type="button">
            제출
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
