import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;

  constructor(private router:Router,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    // this.layoutService.isCustomLayout.subscribe((value: boolean) => {
    //   this.customLayout = value;
    // });
  
    if(this.router.url.split('/')[1]=='admin')
    this.customLayout=true;
    else
    this.customLayout=false;
  }
}
