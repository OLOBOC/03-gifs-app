import { Routes } from '@angular/router';







export const routes: Routes = [


  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      //children es un array de rutas hijas dentro de dashboard
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page.component'),

      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page.component')
      },

      {
        path: '**',
        redirectTo: 'trending',
      },
    ]

  },

  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
