import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems!: any[];

  constructor(public menuSrv: SidebarService) {
    this.menuItems = this.menuSrv.menu;
  }
}
