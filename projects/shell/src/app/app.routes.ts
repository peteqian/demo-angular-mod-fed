import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { loadOtherStyles } from './utility/load-style.service';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadChildren: () => {
      const baseUrl = 'http://localhost:3000';
      return loadOtherStyles(baseUrl).then(() =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'mfe1',
          exposedModule: './Module'
        }).then(m => m.FlightsModule)
      );
    }
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'recipes',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe2',
        exposedModule: './Module'
      }).then(m => m.RecipesModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
