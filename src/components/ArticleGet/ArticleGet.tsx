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

// const mockUser = {
//   id: 1,
//   name: 'string',
//   email: 'string',
//   phone: 'string',
//   position: 'string',
//   position_id: 1,
//   registration_timestamp: 1,
//   photo: 'string',
// };

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

  useEffect(() => {
    setMaxWidthContent(`${widthContentColumns()}px`);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (payloadUsers.length > 0) {
        dispatch(addPayload());
      }
    }, 50);

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

          {/* <Card key="a" user={mockUser} />
          <Card key="b" user={mockUser} />
          <Card key="c" user={mockUser} /> */}

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
                onClick={() => !isLoading && dispatch(getUsersAsync({ link_to_next_page }))}
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

// Task:
// - scroll after payload
// - animation loading
// - animation add payload
// - correct min width content for card
