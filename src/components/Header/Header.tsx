import { FunctionComponent } from "react";
import { Container } from "../Container";
import { Wrapper } from "../Wrapper/Wrapper";
import './Header.scss';

interface HeaderProps {
  
}
 
export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="Header">
      <Container>
        <Wrapper>
          
        </Wrapper>
      </Container>
    </header>
  );
}
