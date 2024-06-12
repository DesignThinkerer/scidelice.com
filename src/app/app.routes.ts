import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: 'profile/:id',
        redirectTo: (urlInfo) => {
            console.log(urlInfo);
            //must return a string or a UrlTree
            return '/'; 
        },
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainComponent,
        data: {
            title: 'Bienvenue'
        }
    }
];
