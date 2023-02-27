export interface IUser {
  id: number | null;
  username: string | null;
  email: string | null;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IToken {
  iat: string | null;
  id: string | null;
  exp: string | null;
}

export type AuthContextType = {
  user: IUser | null;
  isAuthenticated: boolean;
  authenticate: (userLoginInformation: IUserLogin) => Promise<void>;
  logout: () => void;
  JWTToken: IToken | null;
};
