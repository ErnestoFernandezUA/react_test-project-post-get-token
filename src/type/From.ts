export type UserPost = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  images: File[];
};

export type FormPost = {
  user: UserPost;
  delay?: number;
};
