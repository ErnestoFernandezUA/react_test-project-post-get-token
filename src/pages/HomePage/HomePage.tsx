import React, { FunctionComponent } from 'react';

import { SectionPromo } from '../../components/SectionPromo/SectionPromo';
import { SectionGet } from '../../components/SectionGet';
import { SectionPost } from '../../components/SectionPost';

import './HomePage.scss';

export const HomePage: FunctionComponent = () => {
  return (
    <main className="HomePage">
      <SectionPromo />
      <SectionGet />
      <SectionPost />
    </main>
  );
};
