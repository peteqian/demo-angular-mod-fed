import * as fromRecipes from '../recipes/recipes-store/recipe.reducer';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  recipes: fromRecipes.State;
  router: fromRouter.RouterState;
}

export const appReducer: ActionReducerMap<AppState> = {
  recipes: fromRecipes.recipeReducer,
  router: fromRouter.routerReducer
};
