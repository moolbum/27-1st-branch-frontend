import React, { useState, useEffect } from 'react';
import TagKeyword from '../TagKeyword/TagKeyword';
import LeftArticleBox from '../LeftArticleBox/LeftArticleBox';
import RightAuthorBox from '../RightAuthorBox/RightAuthorBox';
import './ListPage.scss';

function ListPage() {
  const [listPageData, setListPageData] = useState([]);
  const [keywordData, setKeywordData] = useState([]);
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    fetch('/data/ListPageData.json')
      .then(res => res.json())
      .then(res => setListPageData(res));
  }, []);

  useEffect(() => {
    fetch('/data/TagKeyword.json')
      .then(res => res.json())
      .then(res => setKeywordData(res));
  }, []);

  useEffect(() => {
    fetch('/data/RightAuthorBox.json')
      .then(res => res.json())
      .then(res => setAuthorData(res));
  }, []);

  return (
    <div className="ListPage">
      <TagKeyword recommendKeyword={keywordData} />
      <section className="contentsContainer">
        <div className="wrapArticleBox">
          <LeftArticleBox articleBoxData={listPageData} />
          <div className="wrapWriterList">
            <p className="titleRecommend">추천작가</p>
            <div className="searchRecommend">
              <RightAuthorBox authorBoxData={authorData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListPage;
