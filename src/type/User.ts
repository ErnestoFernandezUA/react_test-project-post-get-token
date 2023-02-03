export type UserTypeGet = {
  id: number,
  name: string,
  email: string,
  phone: string,
  position: string,
  position_id: number,
  registration_timestamp: number,
  photo: string,
};

export type UserKeys = 'name' | 'email' | 'phone' | 'position_id' | 'photo';

export type UserPost<T, F = undefined> = {
  name: T;
  email: T;
  phone: T;
  position_id: T;
  photo?: F | T;
};
