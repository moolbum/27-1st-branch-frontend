import './Header.scss';

function PageHeader({ pageHeaderData }) {
  return (
    <header className="pageHeader">
      {pageHeaderData.map(headerData => {
        const { id, title, sub_title, nickname, created_at } = headerData;
        return (
          <div key={id}>
            <div className="coverInner" />
            <div className="coverSell">
              <div className="coverTitleShell">
                <h1 className="coverTitle">{title}</h1>
                <p className="coverSubTitle">{sub_title}</p>
                <div className="info">
                  <span className="infoBy">by</span>
                  <span className="infoName">{nickname}</span>
                  <span className="middleDot" />
                  <span className="infoDate">{created_at}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </header>
  );
}

export default PageHeader;
