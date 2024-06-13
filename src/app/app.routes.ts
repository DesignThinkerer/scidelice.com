import { Routes } from "@angular/router";
import { ErrorHandler, inject } from "@angular/core";


//lazy loading https://blog.angular-university.io/angular-standalone-components/
export const routes: Routes = [
    { path: 'contact', title: 'Contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
    { path: 'home', title: 'Accueil', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'ingredients', title: 'Ingrédients', loadComponent: () => import('./pages/ingredients/ingredients.component').then(m => m.IngredientsComponent) },
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
        path: "user/:userId", title: 'Utilisateur', loadComponent: () => import('./pages/user/user.component').then(m => m.UserComponent),
    },
    { path: 'recipes', title: 'Recettes', loadComponent: () => import('./pages/recipes/recipes.component').then(m => m.RecipesComponent) },
    { path: 'signup', title: 'Inscription', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
    {
        path: 'about', title: 'A propos', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        //https://angular.dev/guide/routing/common-router-tasks#nesting-routes
        children: [
            // { path: 'documentation', title: resolveDocumentationTitle, component: DocumentationComponent },
            { path: 'documentation', title: 'Documentation', loadComponent: () => import('./pages/about/documentation/documentation.component').then(m => m.DocumentationComponent) },
            { path: 'author', title: 'Autheur', loadComponent: () => import('./pages/about/author/author.component').then(m => m.AuthorComponent) }
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) } //https://angular.dev/guide/routing/common-router-tasks#setting-up-wildcard-routes
];

