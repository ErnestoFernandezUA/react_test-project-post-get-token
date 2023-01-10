import React from "react";
import { FunctionComponent, useEffect } from "react";
import { User } from "../../components/User";
import { addPayload, selectPayloadUsers, selectUsers, selectUsersStatusLoading } from "../../features/Users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UserType } from "../../type/User";
import './HomePage.scss'
 
export const HomePage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const payloadUsers = useAppSelector(selectPayloadUsers);
  const isLoading = useAppSelector(selectUsersStatusLoading);
  console.log('users', users);    

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

      {users.map((user: UserType) => (
        <User key={user.id} user={user} />
      ))}

      {(isLoading === 'loading') && <>Loading .....</>}

      {payloadUsers.map((user: UserType) => (
        <User key={user.id} user={user} />
      ))}

      {/* <LoadEffect 
        isLoading={(isLoading === 'loading')}
        loader={<>Loading .....</>}
        payload={payloadUsers.map((user: UserType) => (
          <User key={user.id} user={user} />
        ))}
      /> */}
    </div>
  );
}

// interface LoadEffectProps {
//   isLoading: boolean;
//   loader: any;
//   payload: any;
// }
 
// const LoadEffect: FunctionComponent<LoadEffectProps> = ({ isLoading, loader, payload }) => {
//   return (
//   <>
//     {isLoading && loader}
//     {payload}
//   </>);
// }
