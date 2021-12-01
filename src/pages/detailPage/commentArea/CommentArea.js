import React, { useState } from 'react';
import './CommentArea.scss';

function BranchComment() {
  return (
    <div className="branchComment">
      <div className="commentHead">
        <strong className="titleComment">
          댓글
          <span className="txtNum">0</span>
        </strong>
      </div>
      <div className="commentContent">
        <ul className="listComment" />
      </div>
      <div className="wrapCommentWrite">
        <form className="commentWrite">
          <fieldset>
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
                  name="content"
                  maxLength="1000"
                  placeholder="공감과 응원의 댓글은 작가에게 큰 힘이 됩니다."
                />
              </span>
              <div className="writePlace">
                <div type="button" className="iconArticle" />
                <div className="writeBtn">
                  <button type="submit" className="btnDefault">
                    확인
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default BranchComment;
