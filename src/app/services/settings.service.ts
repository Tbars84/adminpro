import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkObj = document.querySelector('#theme');
  urlStorage:string = localStorage.getItem('theme') || './assets/css/colors/blue.css';

  constructor() {
    this.linkObj?.setAttribute('href', this.urlStorage);
  }

  changeTheme(theme:string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkObj?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme(url);
  }
  checkCurrentTheme(urlTheme: string | null){
    const links = document.querySelectorAll('.selector');
    links.forEach(el => {
      const dataTheme = el.getAttribute('data-theme');
      const themeUrl = `./assets/css/colors/${dataTheme}.css`;
      el.classList.remove('working');
      if (urlTheme === themeUrl ){
        el.classList.add('working')
      }
    })
  }
}
