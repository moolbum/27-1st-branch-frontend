import React, { useState, useEffect } from 'react';
import ListRelatedArticle from './ListRelatedArticle/ListRelatedArticle';
import CommentArea from './commentArea/CommentArea';
import Header from './Header/Header';
import BodyFrame from './BodyFrame/BodyFrame';
import WrapAuthor from './WrapAuthor/WrapAuthor';
import FooterBar from './FooterBar/FooterBar';
import Nav from '../../components/Nav/Nav';
import { API } from '../../config';
import './DetailPage.scss';

function DetailPage() {
  const [relaredListUserData, setRelaredListUserData] = useState([]);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [inputComment, setInputComment] = useState([]);
  const [commentValue, setCommentValue] = useState('');
  const [headerData, setHeaderData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [footerBarData, setFooterData] = useState({});
  const [contentBodyData, setContentData] = useState([]);
  const [test, setTest] = useState([]);
  //=====================
  // useEffect(()=>{
  //   fetch('',
  //   method:'POST')b
  // }, [inputComment])
  // //=====================

  useEffect(() => {
    fetch('/Data/bodyFrame.json')
      .then(res => res.json())
      .then(res => setContentData(res));
  }, []);

  useEffect(() => {
    fetch('/Data/comment.json')
      .then(res => res.json())
      .then(res => setTest(res));
  }, []);

  const onChange = e => {
    setCommentValue(e.target.value);
  };

  const onChangePostContent = postId => {
    fetch(`${API.DETAIL_PAGE}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        const data = res[postId];
        setHeaderData(data.header);
        setContentData(data.contents);
      });
  };

  useEffect(() => {
    fetch('/Data/headerData.json')
      .then(res => res.json())
      .then(res => setHeaderData(res));

    fetch('/Data/listRelatedData.json')
      .then(res => res.json())
      .then(res => setRelaredListUserData(res));

    fetch('/Data/WrapAuthor.json')
      .then(res => res.json())
      .then(res => setAuthorData(res));

    fetch(`${API.DETAIL_PAGE}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setFooterData(res.results);
        console.log(res);
      });
  }, []);

  const addComment = () => {
    if (commentValue.trim().length === 0) return;

    setInputComment(element => [
      ...element,
      {
        id: inputComment.length + 1,
        userName: 'token',
        userComment: commentValue,
      },
    ]);

    setCommentValue('');
  };

  const deleteComment = id => {
    setInputComment(inputComment.filter(commentList => commentList.id !== id));
  };

  return (
    <div className="detailPage">
      <Nav setIsCommentOpen={setIsCommentOpen} />
      <Header pageHeaderData={headerData} />
      <div className="wrapBodyFrame">
        <BodyFrame
          setIsCommentOpen={setIsCommentOpen}
          isCommentOpen={isCommentOpen}
          inputComment={inputComment}
          contentBodyData={contentBodyData}
        />
        <div id="section2">
          {isCommentOpen && (
            <CommentArea
              addComment={addComment}
              deleteComment={deleteComment}
              inputComment={inputComment}
              onChange={onChange}
              value={commentValue}
              test={test}
            />
          )}
        </div>
        <WrapAuthor authorData={authorData} />
        <section className="wrapArticle">
          <ListRelatedArticle relatedData={relaredListUserData} />
        </section>
        <div className="wrapFooterBanner">
          <img
            src="/images/DetailPage/footerImage.png"
            className="footerImage"
            alt="하단 배너"
          />
        </div>
      </div>
      <FooterBar
        footerBar={footerBarData}
        onChangePostContent={onChangePostContent}
      />
    </div>
  );
}

export default DetailPage;
