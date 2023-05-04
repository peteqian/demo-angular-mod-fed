import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RecipeEffects } from './recipes/recipes-store/recipe.effects';
import * as fromApp from './store/app.reducer';
import { HeaderComponent } from './header/header.component';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([RecipeEffects]),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
