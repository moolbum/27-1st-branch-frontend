import { Link } from 'react-router-dom';
import './SlideList.scss';

function SlideList({ slideSize, slideMovingWidth, newDitailList }) {
  console.log(newDitailList);
  return (
    <>
      {newDitailList.map(list => {
        return (
          <Link
            to={`/detailPage/${list.posting_id}`}
            className="bestBranchContainer"
            key={list.posting_id}
            style={{
              transform: `translateX(${-slideSize * slideMovingWidth}px)`,
            }}
          >
            <section className="bestBranchSection">
              <div className="branchImageBox">
                <img
                  className="branchCover"
                  src={list.thumbnail}
                  alt="BranchImage"
                />
                <div className="branchCoverDim" />
              </div>
              <div className="bestBranchText">
                <span className="bestBranchTitle">{list.title}</span>
                <span className="bestBranchName">by {list.user}</span>
              </div>
            </section>
          </Link>
        );
      })}
    </>
  );
}

export default SlideList;
