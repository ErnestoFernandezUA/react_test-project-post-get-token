import React, { useRef } from "react";
import { FunctionComponent, useEffect } from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { addPayload, getUsersAsync, selectIsLastPage, selectLinkToNext, selectPayloadUsers, selectUsers, selectUsersError, selectUsersStatusLoading } from "../../store/features/Users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UserType } from "../../type/User";
import { Promo } from "../../components/Promo/Promo";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/Wrapper/Wrapper";
 
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
    <Container>
      <div className="HomePage">
        <Promo />

        <Wrapper>
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
          <button 
            onClick={() => 
              dispatch(getUsersAsync({link_to_next_page}))}
          >
            Show More
          </button>
        }

        <Form />
      </Wrapper>
      </div>
  </Container>
  );
}
