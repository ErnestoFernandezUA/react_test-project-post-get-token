import React, { FunctionComponent } from 'react';
import { Element } from 'react-scroll';

import { Form } from '../Form';

import './ArticlePost.scss';

export const ArticlePost: FunctionComponent = () => {
  return (
    <article className="ArticlePost">
      <Element
        name="ArticlePost"
        className="ArticlePost__anchor"
      >
      </Element>

      <div className="ArticlePost__content">
        <h2 className="ArticlePost__title">Working with POST request</h2>

        <Form />
      </div>
    </article>
  );
};
