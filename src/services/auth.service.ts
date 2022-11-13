import {IUserAuth} from "../types/user";
import $api from "./index";

interface LoginRequest {
    login : string,
    password : string
}

class AuthService {
    login(data : LoginRequest){
        return $api.post<IUserAuth>("auth",data)
    }
}

export default new AuthService();