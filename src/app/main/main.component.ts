import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  articles = [
    {
      id: 1,
      title: 'Spaghetti Bolognaise',
      summary: 'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop'
    },
    {
      id: 2,
      title: 'What is TypeScript?',
      summary: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is pure object-oriented with classes, interfaces and statically typed like C# or Java.'
    },
    {
      id: 3,
      title: 'What is Angular CLI?',
      summary: 'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.'
    },
    {
      id: 1,
      title: 'Spaghetti Bolognaise',
      summary: 'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop'
    },
    {
      id: 2,
      title: 'What is TypeScript?',
      summary: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is pure object-oriented with classes, interfaces and statically typed like C# or Java.'
    },
    {
      id: 3,
      title: 'What is Angular CLI?',
      summary: 'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.'
    }, {
      id: 1,
      title: 'Spaghetti Bolognaise',
      summary: 'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop'
    },
    {
      id: 2,
      title: 'What is TypeScript?',
      summary: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is pure object-oriented with classes, interfaces and statically typed like C# or Java.'
    },
    {
      id: 3,
      title: 'What is Angular CLI?',
      summary: 'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.'
    }
  ];
}
