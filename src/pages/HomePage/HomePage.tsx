import React, { useRef } from "react";
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
 
export const HomePage: FunctionComponent = () => {
  const divRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersStatusLoading);
  const link_to_next_page = useAppSelector(selectLinkToNext);
  const isLastPage = useAppSelector(selectIsLastPage);
  const error = useAppSelector(selectUsersError);

  useEffect(() => {
    setTimeout(() => {
      if (payloadUsers.length > 0) {

        // console.log('setTimeout dispatch(addPayload)');
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
                <Card key={user.id} user={user} />
              ))} 
            </List>

            {(isLoading === 'loading') && <>Loading .....</>}
            
            <List>
              {payloadUsers.map((user: UserType) => (
                <Card key={user.id} user={user} />
              ))}
            </List>

            <div ref={divRef}></div>

            {!isLastPage && 
              <Button
                className="HomePage__button 1112 2131212 HomePage__button--go"
                onClick={() => 
                  dispatch(getUsersAsync({link_to_next_page}))}
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
