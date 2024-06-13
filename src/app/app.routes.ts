import { ResolveFn, Routes } from "@angular/router";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { IngredientsComponent } from "./pages/ingredients/ingredients.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { ErrorHandler, inject } from "@angular/core";
import { UserComponent } from "./pages/user/user.component";
import { AboutComponent } from "./pages/about/about.component";
import { DocumentationComponent } from "./pages/about/documentation/documentation.component";
import { AuthorComponent } from "./pages/about/author/author.component";


//https://angular.dev/guide/routing/common-router-tasks#resolving-data-in-a-nested-route
// const resolveDocumentationTitle: ResolveFn<string> = () => Promise.resolve('Documentation'); 

export const routes: Routes = [
    { path: 'contact',  title:'Contact', component: ContactComponent },
    { path: 'home', title: 'Accueil', component: HomeComponent },
    { path: 'ingredients', title:'Ingrédients', component: IngredientsComponent },
    // https://angular.dev/guide/routing/common-router-tasks#setting-up-redirects
    {
        path: "user",
        title: 'Redirection vers utilisateur',
        redirectTo: ({ queryParams }) => {
            const errorHandler = inject(ErrorHandler);
            const userIdParam = queryParams['userId'];
            if (userIdParam !== undefined) {
                return `/user/${userIdParam}`;
            } else {
                errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
                return `/not-found`;
            }
        },
    },
    {
        path: "user/:userId", title: 'Utilisateur', component: UserComponent,
    },
    { path: 'recipes', title:'Recettes', component: RecipesComponent },
    { path: 'signup', title:'Inscription',component: SignupComponent },
    {
        path: 'about', title:'A propos',component: AboutComponent,
        //https://angular.dev/guide/routing/common-router-tasks#nesting-routes
        children: [
            // { path: 'documentation', title: resolveDocumentationTitle, component: DocumentationComponent },
            { path: 'documentation', title:'Documentation', component: DocumentationComponent },
            { path: 'author', title:'Autheur', component: AuthorComponent }
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent } //https://angular.dev/guide/routing/common-router-tasks#setting-up-wildcard-routes
];

