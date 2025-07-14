import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
    },
    {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module').then(module => module.LayoutModule)
    },

    // {
    //     path: '**',
    //     redirectTo:'tour'
    // }
    
];
