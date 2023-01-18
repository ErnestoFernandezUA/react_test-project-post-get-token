import React, { FunctionComponent } from 'react';
import { Container } from '../Container';
import { Form } from '../Form';
import { Wrapper } from '../Wrapper/Wrapper';

import './ArticlePost.scss';

export const ArticlePost: FunctionComponent = () => {
  return (
    <article className="ArticlePost">
      <Container>
        <Wrapper>
          <h2 className="ArticlePost__title">Working with POST request</h2>

          <Form />
        </Wrapper>
      </Container>
    </article>
  );
};
