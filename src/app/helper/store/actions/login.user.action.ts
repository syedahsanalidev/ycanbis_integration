import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { IUser } from '../../interfaces/user/user.state'

export const ADD_USER = '[USER] Add'
export const REMOVE_USER = '[USER] Remove'
export const UPDATE_USER = '[USER] Update'

/**
 * Add logged in user
 */
export class AddLoggedInUser implements Action {
    readonly type = ADD_USER
    constructor(public payload: IUser) { }
}

/**
 * Add logged in user
 */
export class RemoveLoggedInUser implements Action {
    readonly type = REMOVE_USER;
    constructor(public payload: IUser) { }
}

/**
 * Add logged in user
 */
 export class UpdateLoggedInUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload: IUser) { }
}

export type Actions = AddLoggedInUser | RemoveLoggedInUser | UpdateLoggedInUser;