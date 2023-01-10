import { FunctionComponent } from "react";
import { UserType } from "../type/User";

interface UserProps {
  user: UserType;
}
 
export const User: FunctionComponent<UserProps> = ({ user: {
  id, name, email, photo, phone,
}}) => {
  return (
    <> 
      <img src={photo} alt={`${name}&#39;s`} />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
}
