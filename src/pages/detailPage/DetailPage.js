import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
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
  const [contentBodyData, setContentData] = useState([]);
  const [test, setTest] = useState([]);
  const params = useParams();
  //=====================
  // useEffect(()=>{
  //   fetch('',
  //   method:'POST')b
  // }, [inputComment])
  // //=====================

  // let contentBody = setContentData({ ...contentBodyData, [name]: value });

  //  const handleInput = e => {
  //     const { value, name } = e.target;

  //     setInputData({
  //       ...inputData,
  //       [name]: value,
  //     });
  //   };

  useEffect(() => {
    fetch(`${API.DETAIL_PAGE}/${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setContentData(res);
      });
  }, [params.id]);

  useEffect(() => {
    fetch('/Data/comment.json')
      .then(res => res.json())
      .then(res => setTest(res));
  }, []);

  const onChange = e => {
    setCommentValue(e.target.value);
  };

  useEffect(() => {
    fetch(`${API.RELATED}/${params.id}?limit=${6}`)
      .then(res => res.json())
      .then(res => {
        setRelaredListUserData(res);
      });
  }, [params.id]);

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

  return contentBodyData.results ? (
    <div className="detailPage">
      <Nav setIsCommentOpen={setIsCommentOpen} />
      <Header pageHeaderData={contentBodyData} />
      <div className="wrapBodyFrame">
        {contentBodyData && (
          <BodyFrame
            setIsCommentOpen={setIsCommentOpen}
            isCommentOpen={isCommentOpen}
            inputComment={inputComment}
            contentBodyData={contentBodyData}
            // contentBodyData={contentBody}
          />
        )}
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
        <WrapAuthor authorData={contentBodyData} />
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
      <FooterBar footerBar={contentBodyData} />
    </div>
  ) : null;
}

export default DetailPage;
