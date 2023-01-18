import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { widthContentColumns } from '../../helpers/widthContentColumns';
import {
  addPayload,
  getUsersAsync,
  selectIsLastPage,
  selectLinkToNext,
  selectPayloadUsers,
  selectUsers,
  selectUsersError,
  selectUsersStatusLoading,
} from '../../store/features/Users/usersSlice';
import { Card } from '../Card';
import { Container } from '../Container';
import { Wrapper } from '../Wrapper/Wrapper';
import { List } from '../List';
import { Button } from '../../UI/Button/Button';
import { UserType } from '../../type/User';

import './ArticleGet.scss';

export const ArticleGet: FunctionComponent = () => {
  const divRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersStatusLoading);
  const link_to_next_page = useAppSelector(selectLinkToNext);
  const isLastPage = useAppSelector(selectIsLastPage);
  const error = useAppSelector(selectUsersError);

  const [maxWidthContent, setMaxWidthContent] = useState('200px');

  useEffect(() => {
    setMaxWidthContent(`${widthContentColumns()}px`);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (payloadUsers.length > 0) {
        dispatch(addPayload());
      }
    }, 5000);

    if (divRef.current !== null) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [users.length, payloadUsers, dispatch]);

  return (
    <article className="ArticleGet">
      <Container>
        <Wrapper>
          <h2 className="ArticleGet__title">Working with GET request</h2>

          {error && <p>{error}</p>}

          <List>
            {users.map((user: UserType) => (
              <Card
                key={user.id}
                user={user}
                maxWidthContent={maxWidthContent}
              />
            ))}
          </List>

          {/* distance between List1 - List2 */}

          {(isLoading === 'loading') && <>Loading .....</>}

          <List>
            {payloadUsers.map((user: UserType) => (
              <Card
                key={user.id}
                user={user}
                maxWidthContent={maxWidthContent}
              />
            ))}
          </List>

          <div className="ArticleGet__button-container">
            {!isLastPage && (
              <Button
                onClick={() => dispatch(getUsersAsync({ link_to_next_page }))}
                width={120}
              >
                Show More
              </Button>
            )}
          </div>

          <div ref={divRef}></div>
        </Wrapper>
      </Container>
    </article>
  );
};
