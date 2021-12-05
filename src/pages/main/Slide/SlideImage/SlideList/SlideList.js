import './SlideList.scss';

function SlideList({ userData, slideSize }) {
  const SLIDE_MOVING_UNIT = 1000; //슬라이드 버튼 클릭 시 움직일 길이 1000px

  return (
    <>
      {userData.map(list => {
        return (
          <span
            className="bestBranchContainer"
            key={list.id}
            style={{
              transform: `translateX(${-slideSize * SLIDE_MOVING_UNIT}px)`,
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
