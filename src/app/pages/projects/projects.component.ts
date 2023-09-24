import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Cátalogo de Produtos com venda pelo whatsapp',
      category: 'Angular',
      date: '24/09/2023',
      url: 'assets/img/malimpensadoces.png',
      web: 'https://malimpensadoces.netlify.app/',
      github: 'https://github.com/GustavoMalimpensa/malimpensadoces',
    },
    {
      title: 'Blog pessoal contando um pouco da minha história',
      category: 'Angular',
      date: '24/09/2023',
      url: 'assets/img/blog.png',
      web: 'https://gustavomalimpensa-blog.netlify.app/',
      github: 'https://github.com/GustavoMalimpensa/blog',
    },
    {
      title: 'Site para Solution Tech',
      category: 'React',
      date: '24/09/2023',
      url: 'assets/img/solutiontech.png',
      web: 'https://solutiontech.dev/',
      github: '',
    },
    {
      title: 'Marcos Tatto',
      category: 'React',
      date: '24/09/2023',
      url: 'assets/img/marcostatto.png',
      web: '',
      github: '',
    },
    
  ];
}
