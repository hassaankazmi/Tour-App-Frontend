import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
    },
    {
        path: 'tour',
        loadChildren: () => import('./layout/tours/tours.module').then(module => module.ToursModule)
    },

    // {
    //     path: '**',
    //     redirectTo:'tour'
    // }
    
];
