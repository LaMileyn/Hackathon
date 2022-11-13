import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";

interface LoginRequest {
    login: string,
    password: string
}

export const login = createAsyncThunk("auth/login",
    async (d: LoginRequest, params) => {
        const {data} = await AuthService.login(d);
        localStorage.setItem("token", data.jwtToken)
        return data;
    })