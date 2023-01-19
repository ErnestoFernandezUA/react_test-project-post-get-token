import React, { FunctionComponent } from 'react';
import {
  Link,
  // DirectLink,
  // Element,
  // Events,
  animateScroll as scroll,
  // scrollSpy,
  // scroller,
} from 'react-scroll';

// import { Container } from '../Container';
// import { Wrapper } from '../Wrapper/Wrapper';
import { Button } from '../../UI/Button/Button';
import Logo from '../../images/logo.svg';

import './Header.scss';

export const Header: FunctionComponent = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="Header">

      {/* <Wrapper> */}
      <div className="Header__container">
        <div
          className="Header__logo"
        >
          <button type="button" onClick={scrollToTop}>
            <img src={Logo} alt="Logo" />
          </button>
        </div>

        <div className="Header__nav">
          <Link activeClass="active" to="Get-Component" spy smooth duration={500}>
            <Button
              className="Header__button"
              disabled={false}
            >
              Users
            </Button>
          </Link>

          <Button className="Header__button">Sign in</Button>
        </div>
      </div>
      {/* </Wrapper> */}

    </header>
  );
};
