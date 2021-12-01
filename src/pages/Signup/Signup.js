import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <div className="signup">
      <h1 className="title">branch</h1>
      <div className="signupWrap">
        <div className="line" />
        <h2 className="subtitle">
          브랜치계정으로 사용할
          <br />
        </h2>
        <h2 className="subtitle">이메일을 만들어 주세요.</h2>
        <form>
          <input type="text" placeholder="아이디 입력" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
