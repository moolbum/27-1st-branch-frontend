import { Link } from 'react-router-dom';
import './FooterBar.scss';

function WrapPageFooter({ footerBar }) {
  return (
    <div className="wrapPageFooter">
      <div className="wrapPageFooter">
        {footerBar.results?.prev_posting && (
          <Link
            to={`/detailPage/${footerBar.results?.prev_posting.id}`}
            className="prev"
          >
            <span className="prevPage">작가의 이전글</span>
            <strong className="prevTitle">
              {footerBar.results?.prev_posting.title}
            </strong>
          </Link>
        )}
        {footerBar.results?.next_posting && (
          <Link
            to={`/detailPage/${footerBar.results?.next_posting.id}`}
            className="next"
          >
            <strong className="nextTitle">
              {footerBar.results?.next_posting.title}
            </strong>
            <span className="nextPage">작가의 다음글</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default WrapPageFooter;
