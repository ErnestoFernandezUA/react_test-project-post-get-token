import { FunctionComponent } from 'react';
import './Container.scss';

interface ContainerProps {
  children: any;
}
 
export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className='Container'>{children}</div>
  );
}