
export type TLoginFormInput = {
  username: string;
  password: string;
};

export type TUserPrivate = {
  message: string;
  data: {
    id: string;
    name: string;
    username: string;
    token: string;
  };
};
