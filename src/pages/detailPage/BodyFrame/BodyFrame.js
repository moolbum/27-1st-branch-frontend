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
        const { id, content, post_tag_name } = bodyContentData;
        return (
          <div key={id}>
            <p className="bodytext">{content}</p>
            <article className="innerBodyInfo">
              <div className="wrapKeyword">
                <ul className="listClass">
                  {post_tag_name.map((tagName, i) => {
                    return (
                      <li className="linkKeyword" key={i}>
                        {tagName}
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
