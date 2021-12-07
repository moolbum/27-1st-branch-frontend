import React, { useRef, useLayoutEffect } from 'react';
import './CommentArea.scss';

function BranchComment(props) {
  const {
    addComment,
    deleteComment,
    onChange,
    inputComment,
    value,
    moveComment,
  } = props;
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    textareaRef.current.style.height = 'inherit';
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight
    )}px`;
  }, [value]);

  const inputActiveBtn = !!value.trim();

  return (
    <div className="branchComment" ref={moveComment}>
      <div className="commentHead">
        <strong className="titleComment">
          댓글
          <span className="txtNum">{inputComment.length}</span>
        </strong>
      </div>
      <div className="commentContent">
        <ul className="listComment" />
      </div>
      <div className="wrapCommentWrite">
        <form className="commentWrite">
          {inputComment.map(list => {
            return (
              <div className="wrapInputComment" key={list.id}>
                <div className="wrapNewComment">
                  <div className="commentProfile">
                    <img
                      src="images/DetailPage/authorProfile.jpg"
                      alt="추가댓글프로필사진"
                      className="imgThumb"
                    />
                  </div>
                  <div className="commentInfo">
                    <div className="addNewUserIdComment">{list.userName}</div>
                    <div className="addNewComment">{list.userComment}</div>
                    <button
                      type="button"
                      className="removeButton"
                      onClick={() => deleteComment(list.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <fieldset className="commentWrapper">
            <div className="commentProfile">
              <img
                src="images/DetailPage/authorProfile.jpg"
                alt="댓글프로필사진"
                className="imgThumb"
              />
            </div>
            <div className="boxArea">
              <span className="wrapArea">
                <textarea
                  className="aditorArea"
                  onChange={onChange}
                  ref={textareaRef}
                  value={value}
                  maxLength="1000"
                  placeholder="공감과 응원의 댓글은 작가에게 큰 힘이 됩니다."
                />
              </span>
              <div className="writePlace">
                <div className="iconArticle" />
                <button
                  type="button"
                  className={inputActiveBtn ? 'activeCommentBtn' : 'commentBtn'}
                  onClick={addComment}
                >
                  확인
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
export default BranchComment;
