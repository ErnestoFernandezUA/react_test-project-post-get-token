import React from "react";
import { FunctionComponent, useEffect } from "react";
import { FormComponent } from "../../components/Form";
import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { addPayload, getUsersAsync, selectIsLastPage, selectLinkToNext, selectPayloadUsers, selectUsers, selectUsersStatusLoading } from "../../features/Users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UserType } from "../../type/User";
 
export const HomePage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersStatusLoading);
  const link_to_next_page = useAppSelector(selectLinkToNext);
  const isLastPage = useAppSelector(selectIsLastPage);

  useEffect(() => {
    setTimeout(() => {
      if (!payloadUsers.length) {

        console.log('setTimeout dispatch(addPayload)');
        dispatch(addPayload());
      }
    }, 5000)
  }, [users.length, payloadUsers, dispatch])

  return (
    <div className="HomePage">
      <h2>HomePage</h2>

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

      {!isLastPage && 
        <button 
          onClick={() => 
            dispatch(getUsersAsync({ link_to_next_page }))}
        >
          Show More
        </button>
      }

      <FormComponent />
    </div>
  );
}
