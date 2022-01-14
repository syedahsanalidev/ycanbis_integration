import { IUser } from "../../interfaces/user/user.state";

export interface AppState {
    readonly userLogin: IUser;
}