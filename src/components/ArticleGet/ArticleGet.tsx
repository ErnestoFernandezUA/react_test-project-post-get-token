import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  // Link,
  // DirectLink,
  Element,
  // Events,
  // animateScroll as scroll,
  // scrollSpy,
  // scroller,
} from 'react-scroll';
import classNames from 'classnames';

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
  const divRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersStatusLoading);
  const link_to_next_page = useAppSelector(selectLinkToNext);
  const isLastPage = useAppSelector(selectIsLastPage);
  const error = useAppSelector(selectUsersError);

  const [maxWidthContent, setMaxWidthContent] = useState('160px');

  // eslint-disable-next-line no-console
  console.log(maxWidthContent);

  useEffect(() => {
    setMaxWidthContent(`${widthContentColumns()}px`);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (payloadUsers.length > 0) {
        dispatch(addPayload());
      }
    }, 1000);

    if (divRef.current !== null) {
      divRef.current.scrollIntoView({ behavior: 'smooth' }); // use react-scroll
    }
  }, [users.length, payloadUsers, dispatch]);

  return (
    <article className={classNames('ArticleGet',
      { 'ArticleGet--first-load': !users.length })}
    >
      <Element name="Get-Component">
        <Container>
          <Wrapper>
            <div className="ArticleGet__content">
              <h2 className="ArticleGet__title">Working with GET request</h2>
              {error && <p>{error}</p>}

              <List className="Get-Component">
                {users.map((user: UserType) => (
                  <Card
                    key={user.id}
                    user={user}
                    maxWidthContent={maxWidthContent}
                  />
                ))}

                {payloadUsers.map((user: UserType) => (
                  <Card
                    key={user.id}
                    user={user}
                    maxWidthContent={maxWidthContent}
                  />
                ))}
              </List>

              {(isLoading === 'loading') && <>Loading .....</>}

              <div className="ArticleGet__button-container">
                {(!users.length || !isLastPage) && (
                  <Button
                    onClick={() => dispatch(getUsersAsync({ link_to_next_page }))}
                    width={120}
                  >
                    Show More
                  </Button>
                )}
              </div>

              <div ref={divRef}></div>
            </div>
          </Wrapper>
        </Container>
      </Element>
    </article>
  );
};
