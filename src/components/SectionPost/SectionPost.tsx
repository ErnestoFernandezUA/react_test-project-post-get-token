import { FunctionComponent } from "react";
import { Container } from "../Container";
import { Form } from "../Form";
import { Wrapper } from "../Wrapper/Wrapper";

import './SectionPost.scss';

export const SectionPost: FunctionComponent = () => {
  return (
    <section className="SectionPost">
      <Container>
        <Wrapper>
          <h2 className="SectionPost__title">Working with POST request</h2>

          <Form />
        </Wrapper>
      </Container>
    </section>
  );
}
 