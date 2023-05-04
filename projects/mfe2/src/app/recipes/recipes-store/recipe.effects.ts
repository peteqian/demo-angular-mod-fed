import { Recipe } from './../recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from './recipe.actions';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class RecipeEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.fetchRecipes),
      switchMap(() => {
        const mockRecipes: Recipe[] = [
          {
            name: 'A Test Recipe',
            description: 'This is simply a test',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            ingredients: []
          }
        ];
        return of(mockRecipes);
      }),
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      map(recipes => {
        return RecipesActions.setRecipes({ recipes });
      })
    )
  );

  storeRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.storeRecipes),
        withLatestFrom(this.store.select('recipes')),
        // array destructuring syntax to get the recipes from the store and the action payload from the action that is being dispatched
        switchMap(([actionData, recipesState]) => {
          return this.http.put(
            'https://ng-course-recipe-book-743ca-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
            recipesState.recipes
          );
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromApp.AppState>) {}
}
