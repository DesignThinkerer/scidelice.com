import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: 'profile/:id',
        redirectTo: (urlInfo) => {
            console.log(urlInfo);
            //must return a string or a UrlTree
            return '/accueil'; 
        },
        pathMatch: 'full'
    },
    {
        path: 'accueil',
        component: MainComponent,
        data: {
            title: 'Bienvenue'
        }
    }
];
