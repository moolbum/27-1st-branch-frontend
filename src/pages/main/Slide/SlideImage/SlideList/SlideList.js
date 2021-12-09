import './SlideList.scss';

function SlideList({ slideSize, slideMovingWidth, newDitailList }) {
  return (
    <>
      {newDitailList.map((list, index) => {
        return (
          <span
            className="bestBranchContainer"
            key={index}
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
          </span>
        );
      })}
    </>
  );
}

export default SlideList;
