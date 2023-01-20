import React, { FunctionComponent } from 'react';
import { Form } from '../Form';

import './ArticlePost.scss';

export const ArticlePost: FunctionComponent = () => {
  return (
    <article className="ArticlePost">
      <h2 className="ArticlePost__title">Working with POST request</h2>

      <Form />
    </article>
  );
};
