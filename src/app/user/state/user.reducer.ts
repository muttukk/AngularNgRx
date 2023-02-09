import { createAction,createReducer,on } from "@ngrx/store";

export const userReducer=createReducer(
    {maskUserName:false}, // initial state
    on(createAction('[User] toggle user name]'),state=>{
        return{
            ...state,
            maskUserName:!state.maskUserName
        };
    })
);