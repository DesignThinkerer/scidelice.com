import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userInputValue = ''; // Initialize the variable

  articles = [
    {
      id: 1,
      title: "Chocolat holographique",
      summary: "Faites briller une lumière blanche sur ce chocolat et elle se diffractera en un arc-en-ciel ! Comme les minuscules rainures d'un CD, la surface du chocolat a une texture microscopique qui crée cet effet arc-en-ciel.",
      img: "https://artaalba.ro/wp-content/uploads/2022/07/FLmwNxzUcAEsXiO.jpg",
      img_alt: "Chocolat holographique",
      caption: "Photo : Janelle Shane – Twitter",
      url: "https://www.popsci.com/diy/how-to-make-holographic-chocolate/",
      tags: ["lumière", "physique"]
    },
    {
      id: 2,
      title: "Perles de sirop",
      summary: "Ajoutez du croquant à vos boissons! Apprenez comment transformer du jus de fruit en boules semi-solides qui éclatent dans votre bouche. Cette technique s'appelle la sphérification et fait partie d'une tendance plus large de la science alimentaire appelée gastronomie moléculaire - mais nous appelons ça simplement de la science délicieuse !",
      img: "https://www.sciencebuddies.org/Vo9HMSR7CaNW2_I6tFIwiIylKzk=/450x346/-/https/www.sciencebuddies.org/cdn/Files/6423/9/food-spherification-green-tea.jpg",
      img_alt: "Sphérification alimentaire thé vert",
      caption: "Photo : sciencebuddies.org",
      url: "https://youtu.be/i_z22D_aOXQ?si=8Y_H5rZ1NgtekEqe",
      tags: ["sphérification", "chimie"]
    },
    {
      id: 3,
      title: "Art Fractal sur Café",
      summary: "Découvrez comment des motifs fractals peuvent être créés dans votre tasse de café en utilisant une technique de versage contrôlée. Parfait pour les amateurs d'art et de mathématiques!",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Fractal_cafe_art.jpg",
      img_alt: "Art fractal sur café",
      caption: "Photo : Wikimedia Commons",
      url: "https://fractalcoffeeart.com",
      tags: ["art", "mathématiques"]
    },
    {
      id: 4,
      title: "Céréales Luminescentes",
      summary: "Un petit-déjeuner qui brille dans le noir! Ces céréales luminescentes utilisent des ingrédients biochimiques sûrs pour créer une lueur captivante. Un mélange parfait de chimie et de cuisine!",
      img: "https://example.com/glowing-cereal.jpg",
      img_alt: "Céréales Luminescentes",
      caption: "Photo : Glowing Cereal Inc.",
      url: "https://glowbreakfast.com",
      tags: ["biochimie", "alimentation"]
    },
    {
      id: 5,
      title: "Impression 3D de Nourriture",
      summary: "L'avenir de la cuisine est ici avec l'impression 3D! Explorez comment les chefs utilisent la technologie pour créer des plats impossibles à réaliser à la main.",
      img: "https://example.com/3d-printed-food.jpg",
      img_alt: "Impression 3D de Nourriture",
      caption: "Photo : 3D Print Kitchen",
      url: "https://3dprintedfoods.com",
      tags: ["impression 3D", "technologie"]
    },
    {
      id: 6,
      title: "Les Cristaux Comestibles",
      summary: "Les cristaux ne sont plus seulement pour la décoration! Apprenez comment faire pousser des cristaux de sucre comestibles pour décorer vos desserts de façon élégante.",
      img: "https://example.com/edible-crystals.jpg",
      img_alt: "Cristaux comestibles",
      caption: "Photo : Crystal Candy Co.",
      url: "https://crystalcandymaking.com",
      tags: ["chimie", "desserts"]
    }
  ];
  

  filteredArticles = this.articles;

  filterArticles() {
    this.filteredArticles = this.articles.filter(article =>
      article.title.toLowerCase().includes(this.userInputValue.toLowerCase()) ||
      article.summary.toLowerCase().includes(this.userInputValue.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(this.userInputValue.toLowerCase()))
    );
  }

}
