import { Component, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';
import { DashboardService } from '../services/dashboard.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  /**
   * @method ngAfterViewInit
   */
  categories: any;
  posts: any;
  languages:any;
  constructor(private httpSvc: DashboardService) {

  }
  ngOnInit() {
    this.getCategories();
    this.getPosts();
    this.getLanguages();
  }
  ngAfterViewInit() {
    Prism.highlightAll();

  }
  getCategories() {
    this.httpSvc.getData('categories').pipe(first()).subscribe((response: any) => {
      this.categories = response.categories.length;
    });
  }

  getPosts() {
    this.httpSvc.getData('posts').pipe(first()).subscribe((response: any) => {
      this.posts = response.posts.length;
    });
  }
  getLanguages(){
    this.httpSvc.getData('languages').pipe(first()).subscribe((response: any) => {
      this.languages = response.languages.length;
    });
  }
}
