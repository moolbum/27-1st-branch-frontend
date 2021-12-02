export const USER_DATA = [
  {
    id: 1,
    className: 'inputIdformat',
    type: 'text',
    placeholder: '* 이름 입력',
    onChange: 'userNameInput',
  },
  {
    id: 2,
    className: 'inputIdformat',
    type: 'text',
    placeholder: '* 닉네임 입력',
    onChange: 'userNickNameInput',
  },
  {
    id: 3,
    className: 'inputIdformat',
    type: 'text',
    placeholder: '* 이메일 입력',
    onChange: 'userEmailInput',
    onBlur: 'checkEmail',
  },
  {
    id: 4,
    className: 'inputIdformat',
    type: 'password',
    placeholder: '* 비밀번호 입력',
    onChange: 'userPasswordInput',
  },
  {
    id: 5,
    className: 'inputIdformat',
    type: 'password',
    placeholder: '* 비밀번호 확인',
    onChange: 'userPasswordInput',
  },
  {
    id: 6,
    className: 'inputIdformat',
    type: 'text',
    placeholder: '* 핸드폰번호 입력 (' - ') 제외',
    onChange: 'userPhoneNumberInput',
    onBlur: 'checkCellPhone',
  },
];

export const USER_CHOICE_DATA = [
  {
    id: 1,
    className: 'inputIdformat',
    type: 'text',
    placeholder: 'github 아이디 입력',
    onChange: 'userGithubInput',
  },
  {
    id: 2,
    className: 'inputIdformat',
    type: 'text',
    placeholder: '소개',
    onChange: '{userDescriptionInput}',
  },
  {
    id: 3,
    className: 'inputIdformat',
    type: 'text',
    placeholder: '개발직군 ex) 프론트엔드,백엔드',
    onChange: '{userPositionInput}',
  },
];
