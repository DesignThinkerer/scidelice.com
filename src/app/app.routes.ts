import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RecipesComponent } from './pages/recipes/recipes.component';


/*

ng g c pages/contact
ng g c pages/home
ng g c pages/ingredients
ng g c pages/login
ng g c pages/not-found
ng g c pages/recipes
ng g c pages/signup

*/
export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ingredients', component: IngredientsComponent},
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: NotFoundComponent }
];
