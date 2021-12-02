import React, { useState, useEffect } from 'react';
import ListRelatedArticle from './ListRelatedArticle/ListRelatedArticle';
import CommentArea from './CommentArea/CommentArea';
import './DetailPage.scss';

function DetailPage() {
  const [relaredListUserData, setRelaredListUserData] = useState([]);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [inputComment, setInputComment] = useState([]);
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    fetch('/ListRelatedData/listRelatedData.json')
      .then(res => res.json())
      .then(res => setRelaredListUserData(res));
  }, []);

  const addComment = () => {
    if (value.trim().length === 0) return;

    setInputComment(element => [
      ...element,
      {
        id: inputComment.length + 1,
        userName: 'harry',
        userComment: value,
      },
    ]);

    setValue('');
  };

  const deleteComment = id => {
    setInputComment(inputComment.filter(commentList => commentList.id !== id));
  };

  return (
    <div className="detailPage">
      <header className="pageHeader">
        <div className="coverInner" />
        <div className="coverSell">
          <div className="coverTitleShell">
            <h1 className="coverTitle">쉽게 쓰어진 에세이</h1>
            <p className="coverSubTitle">작가는 아무나 하나요</p>
            <div className="info">
              <span className="infoBy">by</span>
              <span className="infoName">미니민</span>
              <span className="middleDot" />
              <span className="infoDate">Nov 25, 2021</span>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapBodyFrame">
        <div className="wrapContentBody">
          <p className="bodytext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance.
            <br />
            <br />
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
            Cicero are also reproduced in their exact original form, accompanied
            by English versions from the 1914 translation by H. Rackham.
          </p>
          <article className="innerBodyInfo">
            <div className="wrapKeyword">
              <ul className="listClass">
                <li>
                  <a href="#" className="linkKeyword">
                    하루키
                  </a>
                </li>
                <li>
                  <a href="#" className="linkKeyword">
                    에세이
                  </a>
                </li>
                <li>
                  <a href="#" className="linkKeyword">
                    작가
                  </a>
                </li>
              </ul>
            </div>
            <span className="wrapCommentBtn">
              <button
                className="btnComment"
                onClick={() => setIsCommentOpen(!isCommentOpen)}
              >
                <span className="btnCommentIcon" />
                <span>댓글</span>
                <span className="numComment"> {inputComment.length}</span>
              </button>
            </span>
          </article>
        </div>
        {isCommentOpen && (
          <CommentArea
            addComment={addComment}
            deleteComment={deleteComment}
            inputComment={inputComment}
            onChange={onChange}
            value={value}
          />
        )}
        <article className="wrapAuthor">
          <div className="innerAuthor">
            <strong className="authorName">미니민</strong>
            <span className="authorBelong">
              <span className="occupation">교사</span>
            </span>
            <img
              className="imgAuthor"
              src="images/DetailPage/authorProfile.jpg"
              alt="작가이미지"
            />
            <div className="authorDesc">
              <p>
                재미있는 공부, 가고 싶은 학교, 함께 더불어 행복한 어린이를
                꿈꾸는 초등교사. 하고 싶은 이야기, 또는 좋아하는 영화나 소설
                리뷰.
              </p>
            </div>
            <div className="subscription">
              <span className="infoSubscription">
                <span>구독자</span>
                <span className="numSubscription">0</span>
              </span>
              <span className="wrapSubBtn">
                <button className="btnSuggest">개발자보기</button>
                <button className="btnFollow">구독하기</button>
              </span>
            </div>
          </div>
        </article>
        <section className="wrapArticle">
          <ListRelatedArticle relatedData={relaredListUserData} />
        </section>
        <div className="wrapFooterBanner">
          <img
            src="/images/DetailPage/footerImage.png"
            className="footerImage"
            alt="하단 배너"
          />
        </div>
      </div>
      <div className="wrapPageFooter">
        <a href="#" className="prev">
          <span className="prevPage">작가의 이전글</span>
          <strong className="prevTitle">'이해'라는 당신의 오만</strong>
        </a>
        <a href="#" className="next">
          <strong className="nextTitle">어느 키위 이야기</strong>
          <span className="nextPage">작가의 다음글</span>
        </a>
      </div>
    </div>
  );
}

export default DetailPage;
