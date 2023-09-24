import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  person = {
    facebook: 'https://www.facebook.com/gustavomalimpensa',
    whatsapp: '+55(19)999372133',
    instagram: 'https://www.instagram.com/gustavo_malimpensa/',
    github: 'https://github.com/GustavoMalimpensa',
  }

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
