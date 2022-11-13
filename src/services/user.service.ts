import $api from "./index";
import {IUser} from "../types/user";


class UserService {
    getUserData(id : number){
        return $api.get<IUser>("user/info")
    }
}

export default new UserService();