import React, { FunctionComponent } from 'react';

import { ArticlePromo } from '../../components/ArticlePromo/ArticlePromo';
import { ArticleGet } from '../../components/ArticleGet';
// import { ArticlePost } from '../../components/ArticlePost';

import './HomePage.scss';

export const HomePage: FunctionComponent = () => {
  return (
    <section className="HomePage">
      <ArticlePromo />
      <ArticleGet />
      {/* <ArticlePost /> */}
    </section>
  );
};
