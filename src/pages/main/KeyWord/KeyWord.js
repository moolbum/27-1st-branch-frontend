import './KeyWord.scss';

function KeyWord() {
  return (
    <span className="keyWord">
      <span className="Title">BRANCH KEYWORD</span>
      <span className="SubText">키워드로 분류된 다양한 글 모음</span>
      <section className="Container">
        <div className="ContainerLine">
          <div className="Contents">JavaScript</div>
          <div className="Contents">HTML&CSS</div>
          <div className="Contents">Django</div>
        </div>
        <div className="ContainerLine">
          <div className="Contents">C+</div>
          <div className="Contents">파이선</div>
          <div className="Contents">자바</div>
        </div>
      </section>
    </span>
  );
}

export default KeyWord;
