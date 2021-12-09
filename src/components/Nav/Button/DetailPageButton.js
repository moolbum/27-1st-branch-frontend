import './DetailPageButton.scss';

function DetailPageButton({ setIsCommentOpen }) {
  const goToComment = () => {
    window.location.href = '#section2';
    setIsCommentOpen(true);
  };
  return (
    <div className="navRight">
      <img className="favorite" src="/images/Nav/favorite.png" alt="좋아요" />
      <img
        className="comment"
        src="/images/Nav/comment.png"
        alt="댓글"
        onClick={goToComment}
      />
      <img
        className="searchIcon"
        src="/images/Nav/iconmonstr-search-thin.svg"
        alt="검색"
      />
    </div>
  );
}

export default DetailPageButton;
