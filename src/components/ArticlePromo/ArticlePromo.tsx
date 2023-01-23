/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';

import { Button } from '../../UI/Button/Button';

import './ArticlePromo.scss';
import '../../style/Container.scss';
import '../../style/Wrapper.scss';

export const ArticlePromo: FunctionComponent = () => {
  return (
    <article className="Promo Container">
      <div className="Promo__poster Wrapper">
        <h1>Test assignment for front-end developer</h1>

        <p>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>

        <Button className="Promo__button" width={300}>Sign up</Button>
      </div>
    </article>
  );
};
