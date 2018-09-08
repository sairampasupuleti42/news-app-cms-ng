import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categories: any;
  constructor(private httpSvc: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  deleteCategory(id, i) {
    if (confirm('Are you sure you want to delete ?')) {
      this.httpSvc.deleteById(id).pipe(first()).subscribe(response => {
        this.getCategories();
      });
    }
  }
  getCategories() {
    this.httpSvc.getData('categories').pipe(first()).subscribe((response: any) => {
      this.categories = response.categories;
    });
  }

}
