import { Routes } from "@angular/router";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { IngredientsComponent } from "./pages/ingredients/ingredients.component";
import { LoginComponent } from "./pages/login/login.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";
import { SignupComponent } from "./pages/signup/signup.component";


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
