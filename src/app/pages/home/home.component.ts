import { Component, input, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ArticleService } from '../../article.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //consider using Signal inputs to access values from children component
  //https://angular.dev/guide/signals
  
  articleService = inject(ArticleService);

  articles = this.articleService.getArticles();

  randomArticle = this.articleService.getRandomArticle();
  // Filter the articles based on user input
  userInputValue = '';

  filteredArticles = this.articles;

  filterArticles() {
    this.filteredArticles = this.articles.filter(article =>
      article.title.toLowerCase().includes(this.userInputValue.toLowerCase()) ||
      article.summary.toLowerCase().includes(this.userInputValue.toLowerCase())
    );
  }

}
