export interface JwtPayload {
  email: string;
  sub: number;
  iat: number;
  exp: number;
}

export interface AccessToken {
  accessToken: string;
}
