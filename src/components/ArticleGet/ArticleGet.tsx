/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  FunctionComponent,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';
import { Element, scroller } from 'react-scroll';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { widthContentColumns } from '../../helpers/widthContentColumns';
import {
  addPayload,
  getUsersAsync,
  selectIsLastPage,
  selectLinkToNext,
  selectPayloadUsers,
  selectUsers,
  selectUsersErrorGet,
  selectUsersIsLoading,
} from '../../store/features/Users/usersSliceGET';
import { Card } from '../Card';
import { List } from '../List';
import { Button } from '../../UI/Button/Button';
import { UserType } from '../../type/User';
import { Loader } from '../Loader';

import './ArticleGet.scss';
import '../../style/Container.scss';
import '../../style/Wrapper.scss';

export const ArticleGet: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersIsLoading);
  const link_to_next_page = useAppSelector(selectLinkToNext);
  const isLastPage = useAppSelector(selectIsLastPage);
  const error = useAppSelector(selectUsersErrorGet);
  const maxWidthContent = useRef(`${widthContentColumns()}px`);

  const scrollTo = (elem: string) => scroller.scrollTo(elem, {
    duration: 500,
    delay: 0,
    smooth: 'easeInOutQuart',
  });

  useEffect(() => {
    setTimeout(() => {
      if (payloadUsers.length > 0) {
        dispatch(addPayload());
        scrollTo('ArticleGet__anchor');
      }
    }, 350);
  }, [users.length, payloadUsers, dispatch]);

  return (
    <Element name="ArticleGet">
      <article
        className={classNames('ArticleGet',
          { 'ArticleGet--first-load': !users.length },
          'Container',
          'Wrapper')}
      >
        <div className="ArticleGet__content">
          <h2 className="ArticleGet__title">Working with GET request</h2>

          {error && <p>{error}</p>}

          <List>
            {users.map((user: UserType) => (
              <Card
                key={user.id}
                user={user}
                maxWidthContent={maxWidthContent.current}
              />
            ))}

            {payloadUsers.map((user: UserType) => (
              <Card
                className="Payload"
                key={user.id}
                user={user}
                maxWidthContent={maxWidthContent.current}
              />
            ))}
          </List>

          <div
            className={classNames('ArticleGet__button-container',
              { 'ArticleGet__button-container--hidden': isLastPage && users.length })}
          >
            { isLoading ? (
              <Loader />
            ) : (
              <>
                {(!users.length || !isLastPage) && (
                  <Button
                    onClick={() => dispatch(getUsersAsync({ link_to_next_page }))}
                    width={120}
                    disabled={isLoading}
                  >
                    Show More
                  </Button>
                )}
              </>
            )}
          </div>

          <div
            id="ArticleGet__anchor"
            className="ArticleGet__anchor"
          >
          </div>
        </div>
      </article>
    </Element>
  );
};
