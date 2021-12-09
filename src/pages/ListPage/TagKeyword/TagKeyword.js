import { useState } from 'react';
import './TagKeyword.scss';

function KeywordShell({ recommendKeyword }) {
  const [moreActive, setMoreActive] = useState(false);

  const ActiveBtn = () => {
    setMoreActive(!moreActive ? true : false);
  };

  return (
    <div
      className={`keywordShell ${moreActive ? 'setKeywordShell' : null}`}
      // style={!moreActive ? { height: '32px' } : null}
    >
      <div className="relatedKeyword">
        <span className="wrapKeywordBtn">
          {recommendKeyword.map(tagKeyword => {
            const { id, keyword } = tagKeyword;
            return (
              <button className="detailKeyword" key={id}>
                {keyword}
              </button>
            );
          })}
        </span>
        <span className="moreKeywords" onClick={ActiveBtn}>
          <p className="titleMore">{!moreActive ? '더보기' : '접기'}</p>
          <span className="moreArrowBtn" />
        </span>
      </div>
    </div>
  );
}

export default KeywordShell;
