import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./playlist/playlist').then(m => m.PlaylistComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];