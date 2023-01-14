import { FunctionComponent } from 'react';
import Button from '../../UI/Button/Button';
import { Container } from '../Container';
import './Promo.scss';

interface PromoProps {
}
 
export const Promo: FunctionComponent<PromoProps> = () => {
  return (
    <Container>
      <div className='Promo'>
        <h1>Test assignment for front-end developer</h1>

        <p>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        
        <Button>Sign up</Button>  
      </div>

    </Container>
  );
}
