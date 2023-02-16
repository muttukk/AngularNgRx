import { createAction, props } from "@ngrx/store";
import { Product } from "../product";


export const toggleProductCode=createAction(
    '[Product List Page] Toggle Product code'
);


export const setCurrentProduct=createAction(
    '[Product List Page] Set Current Product',
    props<{product:Product}>()
);


export const clearCurrentProduct=createAction(
    '[Product List Page] Clear Current Product'
);


export const initializeCurrentProduct=createAction(
    '[Product List Page] Initialise Current Product'
);

export const loadproducts=createAction(
    '[Product] Load'
);

export const loadproductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadproductsFailure = createAction(
  '[Product] Load Failure',
  props<{ error: string }>()
);