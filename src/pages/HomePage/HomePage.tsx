import React, { memo, useRef, useState } from "react";
import { FunctionComponent, useEffect } from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List/List";
import { Card } from "../../components/Card/Card";
import { addPayload, getUsersAsync, selectIsLastPage, selectLinkToNext, selectPayloadUsers, selectUsers, selectUsersError, selectUsersStatusLoading } from "../../store/features/Users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UserType } from "../../type/User";
import { Promo } from "../../components/Promo/Promo";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/Wrapper/Wrapper";

import './HomePage.scss';
import Button from "../../UI/Button/Button";
import { widthContentColumns } from "../../helpers/widthContentColumns";
 
export const HomePage: FunctionComponent = () => {
  const divRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersStatusLoading);
  const link_to_next_page = useAppSelector(selectLinkToNext);
  const isLastPage = useAppSelector(selectIsLastPage);
  const error = useAppSelector(selectUsersError);

  const [maxWidthContent, setMaxWidthContent] = useState('200px')
  
  useEffect(() => {
    setMaxWidthContent(`${widthContentColumns()}px`)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (payloadUsers.length > 0) {
        dispatch(addPayload());
      }
    }, 50)

    if (divRef.current !== null) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [users.length, payloadUsers, dispatch])

  return (
    <main className="HomePage">
      <section>
        <Promo />
      </section>

      <section>
        <Container>
          <Wrapper>
            <h2 className="HomePage__title">Working with GET request</h2>

            {error && <p>{error}</p>}

            <List>
              {users.map((user: UserType) => (
                <Card key={user.id} user={user} maxWidthContent= {maxWidthContent}/>
              ))} 
            </List>

            {(isLoading === 'loading') && <>Loading .....</>}
            
            <List>
              {payloadUsers.map((user: UserType) => (
                <Card 
                  key={user.id} 
                  user={user} 
                  maxWidthContent= {maxWidthContent}
                />
              ))}
            </List>

            <div ref={divRef}></div>

            {!isLastPage && 
              <Button
                className="HomePage__button"
                onClick={() => {
                  console.log('click');
                  dispatch(getUsersAsync({link_to_next_page}));
                }}
              >
                Show More
              </Button>
            }

            <Form />
          </Wrapper>
        </Container>
      </section>
    </main>
  );
}
