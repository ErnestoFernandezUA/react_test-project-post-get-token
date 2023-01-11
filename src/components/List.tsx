import { FunctionComponent } from "react";
import styled from 'styled-components';

// interface ListProps {
  
// }

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 20px;

  @media(min-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }
  
  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 16px;
  }
  
  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 29px;
    margin-bottom: 29px;
  }
`;

 
export const List: FunctionComponent<{children: any}> = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  );
}
 