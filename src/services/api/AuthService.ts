import APIService from "./APIService";
import { TLogin } from '../../type';

export default class AuthService extends APIService {
  static login({ email, password }: TLogin) {
    return AuthService.postAuth("/auth/login", {
      email,
      password
    });
  }

  static  setToken(value: string, tokenKey: string) {
    if (!value || value.length <= 0) {
      return;
    }
    console.log("set token to LS - ", value);

    localStorage.setItem(tokenKey, value);
    return;
  }

//   static updatePassword({ password, userId, token }) {
//     return AuthService.postAuth(
//       `/api/users/reset-password/receive-new-password/${userId}/${token}`,
//       {
//         password
//       }
//     );
//   }

//   static recoverPassword({ email }) {
//     return AuthService.postAuth(`/api/users/reset-password/user/${email}`);
//   }
}
