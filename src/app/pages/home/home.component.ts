import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articles = [
    {
    id: 1,
    title: "Chocolat holographique",
    summary: "Faites briller une lumière blanche sur ce chocolat et elle se diffractera en un arc-en-ciel ! Comme les minuscules rainures d'un CD, la surface du chocolat a une texture microscopique qui crée cet effet arc-en-ciel.",
    img: "https://artaalba.ro/wp-content/uploads/2022/07/FLmwNxzUcAEsXiO.jpg",
    img_alt: "Chocolat holographique",
    caption: "Photo : Janelle Shane – Twitter",
    url: "https://www.popsci.com/diy/how-to-make-holographic-chocolate/",
    tags: ["lumière","physique"]
    },
    {
    id: 2,
    title: "Perles de sirop",
    summary: "Ajoutez du croquant à vos boissons! Apprenez comment transformer du jus de fruit en boules semi-solides qui éclatent dans votre bouche. Cette technique s'appelle la sphérification et fait partie d'une tendance plus large de la science alimentaire appelée gastronomie moléculaire - mais nous appelons ça simplement de la science délicieuse !",
    img: "https://www.sciencebuddies.org/Vo9HMSR7CaNW2_I6tFIwiIylKzk=/450x346/-/https/www.sciencebuddies.org/cdn/Files/6423/9/food-spherification-green-tea.jpg",
    img_alt: "Sphérification alimentaire thé vert",
    caption: "Photo : sciencebuddies.org",
    url: "https://youtu.be/i_z22D_aOXQ?si=8Y_H5rZ1NgtekEqe",
    tags: ["sphérification","chimie"]
    }
    ]
}
