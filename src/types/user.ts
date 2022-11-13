export interface IUser {
    userId : number,
    avatar : string,
    surname : string,
    name : string,
    middleName : string
}

export interface IUserUpdate{
    surname : string,
    name : string,
    middleName : string,
    avatar? : string
}

export interface IUserAuth {
    jwtToken : string,
    userId : number,
    login : string,
    role : string
}