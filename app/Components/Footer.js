/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Footer
 */
'use strict';

const React = require('react');
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');

class Footer extends React.Component {
  render() {
    const shareUrl = 'https://prash88.github.io/my-wedding/';
    const title = 'Prashanth & Sweta\'s wedding site';
    return (
      <footer className='footer'>
        <section>
          <p>Made with love by <a href="https://twitter.com/prashanthtweet">Prashanth</a>.</p>
        </section>
        <section>
          <div className="Demo__container">

            <div className="Demo__some-network">
              <FacebookShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button">
               <FacebookIcon
                 size={32}
                 round />
              </FacebookShareButton>
              <FacebookShareCount
                 url={shareUrl}
                 className="Demo__some-network__share-count">
                 {count => count}
              </FacebookShareCount>
            </div>

            <div className="Demo__some-network">
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button">
              <TwitterIcon
                size={32}
                round />
              </TwitterShareButton>
              <div className="Demo__some-network__share-count">
                &nbsp;
              </div>
            </div>

            <div className="Demo__some-network">
              <GooglePlusShareButton
                url={shareUrl}
                className="Demo__some-network__share-button">
                <GooglePlusIcon
                  size={32}
                  round />
              </GooglePlusShareButton>

              <GooglePlusShareCount
                url={shareUrl}
                className="Demo__some-network__share-count">
                {count => count}
              </GooglePlusShareCount>
            </div>

          </div>
        </section>
      </footer>
    );
  }
}
module.exports = Footer;
