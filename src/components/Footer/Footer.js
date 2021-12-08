import React from 'react';
import './Footer.scss';

import {
  FOOTER_DATA_LIST_1,
  FOOTER_DATA_LIST_2,
  FOOTER_DATA_LIST_3,
} from './FooterData';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerWrap">
        <h1 className="copyright">
          <span className="copyrightAccent">You can make coding</span>
          <br />
          by Branch
        </h1>
        <div className="listContainer">
          <ul className="listWrap">
            {FOOTER_DATA_LIST_1.map(data => {
              return (
                <li className="list" key={data.id}>
                  {data.value}
                </li>
              );
            })}
          </ul>
          <ul className="listWrap">
            {FOOTER_DATA_LIST_2.map(data => {
              return (
                <li className={data.bold ? 'listBold' : 'list'} key={data.id}>
                  {data.value}
                </li>
              );
            })}
          </ul>
          <ul className="listWrap">
            {FOOTER_DATA_LIST_3.map(data => {
              return (
                <li className="list" key={data.id}>
                  {data.value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="centerLine" />
      <div className="storeWrap">
        <p className="company">© Branch Corp.</p>
        <div className="store">
          <img
            className="playstore"
            src="./images/Footer/playstore.png"
            alt="playstore"
          />
          <img className="apple" src="./images/Footer/apple.png" alt="apple" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
