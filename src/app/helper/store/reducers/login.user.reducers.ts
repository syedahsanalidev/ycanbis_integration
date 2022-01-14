import { Action } from '@ngrx/store'
import { IUser } from '../../interfaces/user/user.state';
import * as LoginUserAction from '../actions/login.user.action';

// Section 1
const initialState: IUser = {
    "_id": "",
    "fullname": "",
    "email": ""
}

export function loginUserReducer(state: IUser[] = [initialState], action: LoginUserAction.Actions) {

    switch (action.type) {
        case LoginUserAction.ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}