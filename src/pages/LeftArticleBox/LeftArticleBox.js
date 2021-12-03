import 'LeftArticleBox.scss';

function LeftArticleBox() {
  return (
    <div className="wrapArticleList">
      <ul className="listArticle">
        <li className="listImageAnimate">
          <div className="postTitleAndImage">
            <h1 className="titleSubject">안녕하세요</h1>
            <div className="wrapSubContent">
              <p className="titleSub">"시간이 없어서"는 변명이다.</p>
              <span className="iconBar" />
              <span className="articleContent">
                긴지라 간에 용기가 같은 새 청춘 그림자는 웅대한 피가 부패뿐이다.
                보내는 생명을 일월과 긴지라 같은 속잎나고, 밥을 인생에
                교향악이다. 이것이야말로 피에 싸인 때문이다. 보는 용감하고
                얼마나 가장 같으며, 것이다. 낙원을 무한한 인류의 따뜻한 꽃이 수
                그들은 약동하다. 피어나기 그들은 그들은 수 과실이 능히 커다란 든
                거친 아름다우냐? 싸인 들어 동력은 사막이다. 산야에 청춘에서만
                대고, 사랑의 내려온 있는 약동하다. 내는 용기가 주며, 방황하여도,
                것은 그림자는 끓는다.
              </span>
            </div>
            <span className="postAppend">
              <span className="nameText">공유</span>
              <span className="numText">0</span>
              <span className="iconDot" />
              <span className="nameText">댓글</span>
              <span className="numText">3</span>
              <span className="iconDot" />
              <span className="postTime">2시간전</span>
              <span className="iconDot" />
              <span className="iconBy">by</span>
              <span className="nameText">기멜</span>
            </span>
          </div>
          <div className="postThumb">
            <img
              src="images/ListPage/lighthouse.jpg"
              className="imageThumb"
              alt="포스트섬네일"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default LeftArticleBox;
