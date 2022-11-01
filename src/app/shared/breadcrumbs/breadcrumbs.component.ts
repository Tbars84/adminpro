import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy{
  private title$!:Subscription;
  public title:string = '';

  constructor(private router:Router) {
    this.title$ = this.getRouterData()
                       .subscribe(({title}) => this.title = `Dashboard ${title}`)
  }
  ngOnDestroy(){
    this.title$.unsubscribe();
  }

  getRouterData(){
    return this.router.events
      .pipe(
        filter((event:any) => ( event instanceof ActivationEnd && event.snapshot.firstChild === null) ),
        map((event:ActivationEnd) => event.snapshot.data)
      )
  }


}
