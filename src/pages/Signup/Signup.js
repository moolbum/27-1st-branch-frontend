import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Signup.scss';

function Signup() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    github: '',
    profilePhoto: '',
    description: '',
    position: '',
  });

  const {
    name,
    nickname,
    email,
    password,
    passwordConfirm,
    phoneNumber,
    github,
    profilePhoto,
    description,
    position,
  } = inputData;

  const onChange = e => {
    const {
      value,
      name,
      nickname,
      email,
      password,
      passwordConfirm,
      phoneNumber,
      github,
      profilePhoto,
      description,
      position,
    } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
      [nickname]: value,
      [email]: value,
      [password]: value,
      [passwordConfirm]: value,
      [phoneNumber]: value,
      [github]: value,
      [profilePhoto]: value,
      [description]: value,
      [position]: value,
    });
  };

  const goToMain = () => {
    alert(`${name + '님'} 회원가입이 되었습니다`);
    navigate('/main');
  };

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const phoneNumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const emailValueCheck = emailRegex.test(email);
  const passwordValueCheck = passwordRegex.test(password);
  const phoneNumberValueCheck = phoneNumberRegex.test(phoneNumber);

  const isSignupValid =
    name &&
    nickname &&
    emailValueCheck &&
    passwordValueCheck &&
    passwordConfirm === password &&
    phoneNumberValueCheck;

  // useEffect(() => {
  //   fetch('api주소', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: this.name,
  //       nickname: this.nickname,
  //       email: this.email,
  //       password: this.password,
  //       phone_number: this.phoneNumber,
  //       github: this.github,
  //       profile_photo: this.profilePhoto,
  //       description: this.description,
  //       position: this.position,
  //     }),
  //   })
  //     .then(responese => responese.json())
  //     .then(result => console.log('결과', result));
  // }, []);
  // console.log(profilePhoto);

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
            name="profilePhoto"
            className="profile"
            id="chooseFile"
            type="file"
            onChange={onChange}
            value={profilePhoto}
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
            onChange={onChange}
            value={name}
          />

          <input
            name="nickname"
            className="inputIdformat"
            type="text"
            placeholder="* 닉네임 입력"
            onChange={onChange}
            value={nickname}
          />
          <input
            name="email"
            className="inputIdformat"
            type="text"
            placeholder="* 이메일 입력"
            onChange={onChange}
            value={email}
          />

          <input
            name="password"
            className="inputIdformat"
            type="password"
            placeholder="* 비밀번호 입력"
            onChange={onChange}
            value={password}
          />

          <p className="passwordInfomation">
            특수문자, 대문자 , 소문자, 숫자 포함 8자리 이상
          </p>

          <input
            name="passwordConfirm"
            className="inputIdformat"
            type="password"
            placeholder="* 비밀번호 확인"
            onChange={onChange}
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
            name="phoneNumber"
            className="inputIdformat"
            type="text"
            placeholder="* 핸드폰번호 입력 ('-') 제외"
            onChange={onChange}
            value={phoneNumber}
          />

          <p className="additionalInput">추가입력</p>

          <input
            name="github"
            className="inputIdformat"
            type="text"
            placeholder="github 아이디 입력"
            onChange={onChange}
            value={github}
          />

          <input
            name="description"
            className="inputIdformat"
            type="text"
            placeholder="소개"
            onChnage={onChange}
            value={description}
          />

          <input
            name="position"
            className="inputIdformat"
            type="text"
            placeholder="개발직군 ex) 프론트엔드,백엔드"
            onChange={onChange}
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
            disabled={!isSignupValid}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
