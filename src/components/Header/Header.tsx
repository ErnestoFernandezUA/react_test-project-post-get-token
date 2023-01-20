import React, { FunctionComponent } from 'react';
import {
  animateScroll as scroll,
} from 'react-scroll';

import { Button } from '../../UI/Button/Button';
import Logo from '../../images/logo.svg';

import './Header.scss';
import '../../style/Container.scss';
import '../../style/Wrapper.scss';

export const Header: FunctionComponent = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
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
          <Button onClick={() => scroll.scrollTo(window.innerHeight)}>
            Users
          </Button>

          <Button>Sign in</Button>
        </div>
      </div>
    </div>
  );
};
