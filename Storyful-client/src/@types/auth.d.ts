export interface IUser {
  id: number | null;
  username: string | null;
  email: string | null;
  avatar: any;
}

export interface IUserLogin {
  email: string | null | undefined;
  password: string | null | undefined;
}

export interface IToken {
  iat: string;
  id: string;
  username: string;
  email: string;
  exp: string;
}

export type AuthContextType = {
  user: IUser | null;
  isAuthenticated: boolean;
  authenticate: (
    userLoginInformation: IUserLogin
  ) => Promise<void> | true | false | any;
  logout: () => void;
  JWTToken: IToken | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};
