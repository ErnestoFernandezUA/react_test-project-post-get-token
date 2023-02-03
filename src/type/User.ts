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

export interface UserTypePost<T, F = undefined> {
  name: T;
  email: T;
  phone: T;
  position_id: T;
  photo: F | T;
}

export interface One {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: File | undefined;
}

export interface Two {
  name: (value: string) => void;
  email: (value: string) => void;
  phone: (value: string) => void;
  position_id: (value: string) => void;
  photo: (value: string) => void;
}

export interface UserTypePost1<S, F, U, V> {
  name: S | V;
  email: S | V;
  phone: S | V;
  position_id: S | V;
  photo: F | T;
}
