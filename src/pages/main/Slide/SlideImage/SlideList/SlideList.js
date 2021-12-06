import './SlideList.scss';

function SlideList({ userData, slideSize, SLIDE_MOVING_WIDTH }) {
  return (
    <>
      {userData.map(list => {
        return (
          <span
            className="bestBranchContainer"
            key={list.id}
            style={{
              transform: `translateX(${-slideSize * SLIDE_MOVING_WIDTH}px)`,
            }}
          >
            <section className="bestBranchSection">
              <div className="branchImageBox">
                <img
                  className="branchCover"
                  src={list.images}
                  alt="BranchImage"
                />
                <div className="branchCoverDim" />
              </div>
              <div className="bestBranchText">
                <span className="bestBranchTitle">{list.title}</span>
                <span className="bestBranchName">by {list.userName}</span>
              </div>
            </section>
          </span>
        );
      })}
    </>
  );
}

export default SlideList;
