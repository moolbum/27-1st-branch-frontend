const BASE_URL = 'http://10.58.3.206:8000';

export const API = {
  MAIN: `${BASE_URL}/main`,
  MYPAGE: `${BASE_URL}/users/mypage/1`,
  USER_PAGE: `${BASE_URL}/users`,
  SIGNUP: `${BASE_URL}/users/signup`,
  WRITERDATA: `${BASE_URL}/users/?user_tag_id=`,
  TAGDATA: `${BASE_URL}/branch_tags/userTagList`,
  DITAILLIST: `${BASE_URL}/postings`,
  KEYWORDS: `${BASE_URL}/keywords/list`,
  LOGIN: `${BASE_URL}/users/signin`,
};
