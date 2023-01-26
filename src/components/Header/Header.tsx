import React, { FunctionComponent } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';

import { Button } from '../../UI/Button/Button';
import Logo from '../../images/logo.svg';

import './Header.scss';
import '../../style/Container.scss';
import '../../style/Wrapper.scss';

export const Header: FunctionComponent = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = (elem: string) => {
    scroller.scrollTo(elem, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="Header">
      <div className="Header__container Container Wrapper">
        <div className="Header__logo">
          <button type="button" onClick={scrollToTop}>
            <img src={Logo} alt="Logo" />
          </button>
        </div>

        <div className="Header__nav">
          <Button
            onClick={() => scrollTo('ArticleGet')}
          >
            Users
          </Button>

          <Button
            onClick={() => scrollTo('ArticlePost')}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};
