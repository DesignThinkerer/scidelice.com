import { ApplicationConfig, Injectable, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';

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
    provideRouter(routes, withComponentInputBinding()), //https://angular.dev/guide/routing/common-router-tasks#add-withcomponentinputbinding
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }, // https://angular.dev/guide/routing/common-router-tasks#setting-the-page-title

    provideClientHydration()
  ]
};
