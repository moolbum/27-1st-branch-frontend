import './BodyFrame.scss';

function WrapContentBody({
  setIsCommentOpen,
  isCommentOpen,
  inputComment,
  contentBodyData,
}) {
  return (
    <div className="wrapContentBody">
      {/* {contentBodyData.map(bodyContentData => {
        const { id, content, post_tag_name } = bodyContentData;
        return ( */}
      <div>
        <p className="bodytext">{contentBodyData.content}</p>
        <article className="innerBodyInfo">
          <div className="wrapKeyword">
            <ul className="listClass">
              {contentBodyData.posting_tags?.map((tag, idx) => (
                <li key={idx} className="linkKeyword">
                  {tag.name}
                </li>
              ))}
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
      {/* );
      })} */}
    </div>
  );
}

export default WrapContentBody;
