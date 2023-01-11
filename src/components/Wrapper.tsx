import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media(min-width: 360px){
    padding: 0 32px;
  }

  @media(min-width: 768px){
    padding: 0 60px; 
  }

  @media(min-width: 1024px){
    padding: 0 60px;
  }

  @media(min-width: 1170px){
    padding: 0;
  }
`;