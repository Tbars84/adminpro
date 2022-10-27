import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeTheme(theme:string){
    const linkObj = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`;
    linkObj?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

}
