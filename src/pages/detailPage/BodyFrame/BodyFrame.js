import React, { useState, useEffect } from 'react';
import './BodyFrame.scss';

function WrapContentBody({ setIsCommentOpen, isCommentOpen, inputComment }) {
  const [contentBodyData, setContentData] = useState([]);

  useEffect(() => {
    fetch('/Data/bodyFrame.json')
      .then(res => res.json())
      .then(res => setContentData(res));
  }, []);

  return (
    <div className="wrapContentBody">
      {contentBodyData.map(bodyContentData => {
        // const { id, content, post_tag_name } = bodyContentData;
        return (
          <div key={bodyContentData.id}>
            <p className="bodytext">{bodyContentData.content}</p>
            <article className="innerBodyInfo">
              <div className="wrapKeyword">
                <ul className="listClass">
                  {bodyContentData.post_tag_name.map(tagName => {
                    return (
                      <li className="linkKeyword" key={tagName.index}>
                        {bodyContentData.post_tag_name}
                      </li>
                    );
                  })}
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
        );
      })}
    </div>
  );
}

export default WrapContentBody;
