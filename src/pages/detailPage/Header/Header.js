import './Header.scss';

function PageHeader({ pageHeaderData }) {
  const { title, sub_title, nickname, created_at } = pageHeaderData;

  return (
    <header className="pageHeader">
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
    </header>
  );
}

export default PageHeader;
