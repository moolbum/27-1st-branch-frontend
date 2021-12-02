import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Signup.scss';

function Signup() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [github, setGithub] = useState('');
  const [description, setDescription] = useState('');
  const [position, setPosition] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    alert(`${name + '님'} 회원가입이 되었습니다`);
    navigate('/main');
  };

  const onNameHandler = event => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const onNicknameHandler = event => {
    const { value } = event.currentTarget;
    setNickname(value);
  };

  const onEmailHandler = event => {
    const { value } = event.currentTarget;
    setEmail(value);
  };

  const onPasswordHandler = event => {
    const { value } = event.currentTarget;
    setPassword(value);
  };
  const onPasswordConfirmHandler = event => {
    const { value } = event.currentTarget;
    setPasswordConfirm(value);
  };

  const onPhoneNumberHandler = event => {
    const { value } = event.currentTarget;
    setPhoneNumber(value);
  };

  const onGithubHandler = event => {
    const { value } = event.currentTarget;
    setGithub(value);
  };

  const onDescriptionHandler = event => {
    const { value } = event.currentTarget;
    setDescription(value);
  };

  const onPositionHandler = event => {
    const { value } = event.currentTarget;
    setPosition(value);
  };

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const phoneNumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const emailValueCheck = emailRegex.test(email);
  const passwordValueCheck = passwordRegex.test(password);
  const phoneNumberValueCheck = phoneNumberRegex.test(phoneNumber);

  const isSignupButtonHandler =
    name &&
    nickname &&
    emailValueCheck &&
    passwordValueCheck &&
    passwordConfirm === password &&
    phoneNumberValueCheck;

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
            onChange={onNameHandler}
            value={name}
          />

          <input
            name="nickname"
            className="inputIdformat"
            type="text"
            placeholder="* 닉네임 입력"
            onChange={onNicknameHandler}
            value={nickname}
          />
          <input
            name="email"
            className="inputIdformat"
            type="text"
            placeholder="* 이메일 입력"
            onChange={onEmailHandler}
            value={email}
          />

          <input
            name="password"
            className="inputIdformat"
            type="password"
            placeholder="* 비밀번호 입력"
            onChange={onPasswordHandler}
            value={password}
          />

          <p className="passwordInfomation">
            특수문자, 대문자 , 소문자, 숫자 포함 8자리 이상
          </p>

          <input
            name="password"
            className="inputIdformat"
            type="password"
            placeholder="* 비밀번호 확인"
            onChange={onPasswordConfirmHandler}
            value={passwordConfirm}
          />

          <p
            className={
              passwordConfirm === password
                ? 'passwordErrorOff'
                : 'passwordErrorOn'
            }
          >
            비밀번호가 일치하지 않습니다.
          </p>

          <input
            name="phone_number"
            className="inputIdformat"
            type="text"
            placeholder="* 핸드폰번호 입력 ('-') 제외"
            onChange={onPhoneNumberHandler}
            value={phoneNumber}
          />

          <p className="additionalInput">추가입력</p>

          <input
            name="github"
            className="inputIdformat"
            type="text"
            placeholder="github 아이디 입력"
            onChange={onGithubHandler}
            value={github}
          />
          <input
            name="description"
            className="inputIdformat"
            type="text"
            placeholder="소개"
            onChnage={onDescriptionHandler}
            value={description}
          />
          <input
            name="position"
            className="inputIdformat"
            type="text"
            placeholder="개발직군 ex) 프론트엔드,백엔드"
            onChange={onPositionHandler}
            value={position}
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
          <button
            className="signupSubmit"
            type="button"
            onClick={goToMain}
            disabled={!isSignupButtonHandler}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
