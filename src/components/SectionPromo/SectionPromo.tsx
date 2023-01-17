/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { Container } from '../Container';
import { Button } from '../../UI/Button/Button';
import './SectionPromo.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SectionPromoProps {
}

export const SectionPromo: FunctionComponent<SectionPromoProps> = () => {
  return (
    <section>
      <Container>
        <div className="Promo">
          <h1>Test assignment for front-end developer</h1>

          <p>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
          </p>

          <Button>Sign up</Button>
        </div>
      </Container>
    </section>
  );
};
