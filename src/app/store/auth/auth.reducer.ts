// import { createReducer } from "@ngrx/store";
// import { User } from "../../modules/dashboard/pages/users/models";
// import { AuthActions } from "./auth.actions";

// export const authFeatureKey = 'auth';

// export interface AuthState {
//     authUser: User | null;

// }

// const initialState: AuthState = {
//     authUser: null,

// };

// export const authReducer = createReducer {
//     initialState,
//     on (AuthActions.setAuthUser, (state, action)=> {
//         return {
//             ...state, 
//             authUser: action.user,
//         };

//     })
// };