import { createAction, createReducer, on } from "@ngrx/store";

export const productReducer=createReducer(
    {showProductCode:true}, // initial state
    on(createAction('[Product] toggle product code'),state=>{
        //console.log('original State' + JSON.stringify(state));
        return{
            ...state,
            showProductCode:!state.showProductCode
        };
    })
);