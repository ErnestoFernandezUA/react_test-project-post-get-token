import React, {
  FunctionComponent,
  useEffect,
  // useRef,
  useState,
} from 'react';
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
  selectUsersIsLoading,
} from '../../store/features/Users/usersSlice';
import { Card } from '../Card';
import { List } from '../List';
import { Button } from '../../UI/Button/Button';
import { UserType } from '../../type/User';
import { Loader } from '../Loader';

import './ArticleGet.scss';
import '../../style/Container.scss';
import '../../style/Wrapper.scss';
import '../../style/Payload.scss';

export const ArticleGet: FunctionComponent = () => {
  // const divRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersIsLoading);
  const link_to_next_page = useAppSelector(selectLinkToNext);
  const isLastPage = useAppSelector(selectIsLastPage);
  const error = useAppSelector(selectUsersError);

  const [maxWidthContent, setMaxWidthContent] = useState('');

  // eslint-disable-next-line no-console
  console.log('ArticleGet/ maxWidthContent', maxWidthContent);
  // eslint-disable-next-line no-console
  console.log('ArticleGet/ isLoading', isLoading);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('setMaxWidthContent');

    setMaxWidthContent(`${widthContentColumns()}px`);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (payloadUsers.length > 0) {
        dispatch(addPayload());
      }
    }, 5000);

    // if (divRef.current !== null) {
    //   divRef.current.scrollIntoView({ behavior: 'smooth' }); // use react-scroll
    // }
  }, [users.length, payloadUsers, dispatch]);

  return (
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
              maxWidthContent={maxWidthContent}
            />
          ))}
        </List>

        <List className="Payload">
          {payloadUsers.map((user: UserType) => (
            <Card
              key={user.id}
              user={user}
              maxWidthContent={maxWidthContent}
            />
          ))}
        </List>

        <div className="ArticleGet__loaderUI">
          <Loader isLoading={isLoading} />

          <div className="ArticleGet__button-container">
            {(!users.length || !isLastPage) && (
              <Button
                onClick={() => dispatch(getUsersAsync({ link_to_next_page }))}
                width={120}
                disabled={isLoading}
              >
                Show More
              </Button>
            )}
          </div>
        </div>

        {/* <div ref={divRef}></div> */}
      </div>
    </article>
  );
};
