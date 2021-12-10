import React, { useState, useEffect } from 'react';
import TagKeyword from '../ListPage/TagKeyword/TagKeyword';
import LeftArticleBox from '../ListPage/LeftArticleBox/LeftArticleBox';
import RightAuthorBox from '../ListPage/RightAuthorBox/RightAuthorBox';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import MainNav from '../../components/Nav/MainNav';
import { API } from '../../config';
import './ListPage.scss';

function ListPage() {
  const [listPageData, setListPageData] = useState([]);
  const [keywordData, setKeywordData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [listItems, setListItems] = useState(
    Array.from(Array(1).keys(), n => n + 1)
  );
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => {
    fetch(`${API.DITAILLIST}?limit=${12}`)
      .then(res => res.json())
      .then(res => setListPageData(res.result));
  }, []);

  useEffect(() => {
    fetch(`${API.TAGDATA}`)
      .then(res => res.json())
      .then(res => setKeywordData(res.result));
  }, []);

  useEffect(() => {
    fetch(`${API.RELATED}?limit=${6}`)
      .then(res => res.json())
      .then(res => setAuthorData(res.result));
  }, []);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => [
        ...prevState,
        ...Array.from(Array(1).keys(), n => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 1000);
  }

  return (
    <div className="ListPage">
      <MainNav />
      <TagKeyword recommendKeyword={keywordData} />
      <section className="contentsContainer">
        <div className="wrapArticleBox">
          <div className="wrapList">
            {listItems.map(listItem => (
              <LeftArticleBox key={listItem} articleBoxData={listPageData}>
                List Item {listItem}
              </LeftArticleBox>
            ))}
            <div className="loeadingItem">{isFetching && '로딩중...'}</div>
          </div>
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
