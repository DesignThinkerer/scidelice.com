import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: 'profile/:id',
        redirectTo: (urlInfo) => {
            console.log(urlInfo);
            
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
