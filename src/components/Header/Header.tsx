import { FunctionComponent } from "react";
import { Container } from "../Container";
import { Wrapper } from "../Wrapper/Wrapper";
import './Header.scss';
import Logo from '../../images/logo.svg'
import Button from "../../UI/Button/Button";

interface HeaderProps {
  
}
 
export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="Header">
      <Container>
        <Wrapper>
          <div className="Header__container">
            <div className="Header__logo">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="Header__nav">
              <Button
                className="Header__button"
                disabled={false}
              >
                Users
              </Button>
              <Button className="Header__button">Sign in</Button>
            </div>
          </div>
        </Wrapper>
      </Container>
    </header>
  );
}
