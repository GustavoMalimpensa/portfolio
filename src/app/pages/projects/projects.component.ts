import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    
    {
      title: 'Blog pessoal contando um pouco da minha história',
      category: 'Angular',
      date: '21/05/2023',
      url: 'assets/img/blog.png',
      web: 'https://gustavomalimpensa-blog.netlify.app/',
      github: 'https://github.com/GustavoMalimpensa/blog',
    },
    {
      title: 'Site para empresa de tecnologia "Solution Tech"',
      category: 'React',
      date: '24/09/2023',
      url: 'assets/img/solutiontech.png',
      web: 'https://solutiontech.dev/',
      github: '',
    },
    {
      title: 'Sistema de venda para confeitaria  ',
      category: 'Angular',
      date: '22/09/2023',
      url: 'assets/img/mobilemalimpensadoces.png',
      web: 'https://malimpensadoces.netlify.app/',
      github: 'https://github.com/GustavoMalimpensa/malimpensadoces',
    },
    {
      title: 'Site para studio de tatuagem',
      category: 'React',
      date: '24/09/2023',
      url: 'assets/img/marcostatto.png',
      web: '',
      github: '',
    },
    {
      title: 'Marktplace realizado no Hackaton da Unesp ',
      category: 'C',
      date: '10/11/2022',
      url: 'assets/img/hackthon.png',
      web: '',
      github: 'https://github.com/GustavoMalimpensa/Hackaton',
    },
    {
      title: 'Portfólio',
      category: 'Angular',
      date: '22/09/2023',
      url: 'assets/img/portfolio.png',
      web: '',
      github: 'https://github.com/GustavoMalimpensa/portfolio',
    },
    {
      title: '"Raspagem de Dados" para conseguir os dados de contato das empresas. ',
      category: 'Python',
      date: '04/07/2023',
      url: 'assets/img/datascience.png',
      web: '',
      github: 'https://github.com/GustavoMalimpensa/updating_data',
    }    
  ];
}
