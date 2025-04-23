import { Routes } from '@angular/router';







export const routes: Routes = [


  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component')

  },
  {
    path:'trending',
    redirectTo: './gifs/pages/trending-page/trending-page.component',
  },
  {
    path:'search',
    redirectTo: './gifs/pages/search-page/search-page.component',
  },
  {
    path:'**',
    redirectTo: 'dashboard',
  }
];
