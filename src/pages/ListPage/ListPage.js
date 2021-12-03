import React, { useState, useEffect } from 'react';
import LeftArticleBox from '../LeftArticleBox/LeftArticleBox';
import TagKeyword from '../TagKeyword/TagKeyword';
import './ListPage.scss';

function ListPage() {
  const [listPageData, setListPageData] = useState([]);
  const [recommendData, setRecommendData] = useState([]);

  useEffect(() => {
    fetch('/data/ListPageData.json')
      .then(res => res.json())
      .then(res => setListPageData(res));
  }, []);

  useEffect(() => {
    fetch('/data/TagKeyword.json')
      .then(res => res.json())
      .then(res => setRecommendData(res));
  }, []);

  return (
    <div className="ListPage">
      <TagKeyword recommendKeyword={recommendData} />
      <section className="contentsContainer">
        <div className="wrapArticleBox">
          <LeftArticleBox articleBoxData={listPageData} />
          <div className="wrapWriterList">
            <p className="titleRecommend">추천작가</p>
            <div className="searchRecommend">
              <div className="wrapWriter">
                <span className="thumbImage">
                  <img
                    src="images/ListPage/lighthouse.jpg"
                    className="thumbItemImage"
                    alt="추천작가섬네일이미지"
                  />
                </span>
                <div className="detailRecommend">
                  <span className="textRecommend">이야호</span>
                  <div className="textInfo">
                    <span className="nameText">글 135</span>
                    <span className="iconDot" />
                    <span className="numText">구독자 671</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="searchRecommend">
              <div className="wrapWriter">
                <span className="thumbImage">
                  <img
                    src="images/ListPage/lighthouse.jpg"
                    className="thumbItemImage"
                    alt="추천작가섬네일이미지"
                  />
                </span>
                <div className="detailRecommend">
                  <span className="textRecommend">이야호</span>
                  <div className="textInfo">
                    <span className="nameText">글 135</span>
                    <span className="iconDot" />
                    <span className="numText">구독자 671</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListPage;
