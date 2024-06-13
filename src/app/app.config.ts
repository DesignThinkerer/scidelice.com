import { ApplicationConfig, Injectable, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { PreloadAllModules, RouterStateSnapshot, TitleStrategy, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { Title, provideClientHydration } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Scidélice | ${title}`);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes, 
      withComponentInputBinding(), //https://angular.dev/guide/routing/common-router-tasks#add-withcomponentinputbinding
      withPreloading(PreloadAllModules) 
      // Note: si on a beaucoup de modules à charger, cela peut causer du lag. Dans ce cas, on peut utiliser le Quicklink preloading, voir: https://web.dev/articles/route-preloading-in-angular#using_the_preloadallmodules_strategy

      //https://angular.dev/guide/routing/common-router-tasks#preloading-lazy-loaded-modules
    ), 
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }, // https://angular.dev/guide/routing/common-router-tasks#setting-the-page-title

    provideClientHydration()
  ]
};
