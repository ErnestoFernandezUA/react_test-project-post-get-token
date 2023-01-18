/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { Container } from '../Container';
import { Button } from '../../UI/Button/Button';
import { Wrapper } from '../Wrapper/Wrapper';
import './ArticlePromo.scss';

export const ArticlePromo: FunctionComponent = () => {
  return (
    <article className="Promo">
      <Container>
        <div className="Promo__poster">
          <Wrapper>
            <div className="Promo__content">
              <h1>Test assignment for front-end developer</h1>

              <p>
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
              </p>

              <Button className="Promo__button">Sign up</Button>
            </div>
          </Wrapper>
        </div>
      </Container>
    </article>
  );
};
