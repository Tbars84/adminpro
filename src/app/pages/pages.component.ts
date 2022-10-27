import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  linkObj = document.querySelector('#theme');
  url:string = localStorage.getItem('theme') || './assets/css/colors/blue.css';

  constructor() { }

  ngOnInit(): void {
    this.linkObj?.setAttribute('href', this.url);
  }

}
