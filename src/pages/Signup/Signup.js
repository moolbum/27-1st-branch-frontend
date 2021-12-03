import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Signup.scss';
import { USER_DATA, USER_CHOICE_DATA } from './UserData';

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

  const { name, nickname, email, password, passwordConfirm, phoneNumber } =
    inputData;

  const handleInput = e => {
    const { value, name } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
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

  const isPwValid = password && password !== passwordConfirm;

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
            onChange={handleInput}
          />
          <label className="profileUplode" for="chooseFile">
            <img
              className="profilePicture"
              src="./images/Signup/profile.png"
              alt="프로필"
            />
          </label>
          {USER_DATA.map(user => {
            return (
              <input
                key={user.id}
                name={user.name}
                className="inputIdformat"
                type={user.type}
                placeholder={user.placeholder}
                onChange={handleInput}
              />
            );
          })}

          <p className="passwordInfomation">
            특수문자, 대문자 , 소문자, 숫자 포함 8자리 이상
          </p>

          <input
            name="passwordConfirm"
            className="inputIdformat"
            type="password"
            placeholder="* 비밀번호 확인"
            onChange={handleInput}
          />

          {isPwValid && (
            <p className="passwordError">비밀번호가 일치하지 않습니다.</p>
          )}

          <input
            name="phoneNumber"
            className="inputIdformat"
            type="text"
            placeholder="* 핸드폰번호 입력 ('-') 제외"
            onChange={handleInput}
          />

          <p className="additionalInput">추가입력</p>

          {USER_CHOICE_DATA.map(user => {
            return (
              <input
                key={user.id}
                name={user.name}
                className="inputIdformat"
                type={user.type}
                placeholder={user.placeholder}
                onChange={handleInput}
              />
            );
          })}

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
