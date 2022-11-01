import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      expandedMenu: [
        {label: 'Main' , route: ''},
        {label: 'Progress' , route: 'progress'},
        {label: 'Graphics' , route: 'graphics'},
        { label: 'Rxjs', route: 'rxjs' },
      ]
    }
  ]
  constructor() { }
}
