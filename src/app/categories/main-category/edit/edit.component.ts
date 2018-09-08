import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

export class Category {
  id: number;
  name: string;
  permalink: string;
  language_id: number;
  parent_id: number;
  status: any;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  categories: any;
  checked: boolean = false;
  isSub: boolean = false;
  categoryForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  entryError: boolean = false;
  entryErrorMsg: string;
  languages: any;
  status: any;
  category: any;
  constructor(
    private formBuilder: FormBuilder,
    private httpSvc: CategoryService,
    protected location: Location,
    private router: Router
  ) {
    this.status = [
      {
        id: 0,
        name: 'Inactive'
      }, {
        id: 1,
        name: 'Active'
      }
    ];

  }

  ngOnInit() {

    this.categoryForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      language_id: ['', Validators.required],
      parent_id: [],
      permalink: ['', Validators.required],
      status: [],
      created_by: ['']
    });
    this.httpSvc.getData('categories/' + this.router.url.split('/')[5]).pipe(first()).subscribe((response: any) => {
      this.category = response.category;
      this.categoryForm.setValue(response.category);
    });
    this.httpSvc.getData('categories/parent/0').pipe(first()).subscribe((response: any) => {
      this.categories = response.categories;
    });
    this.httpSvc.getData('languages').pipe(first()).subscribe((response: any) => {
      this.languages = response.languages;
    });

  }
  get f() { return this.categoryForm.controls; }
  checkCategoryType() {
    this.checked = !this.checked;
    this.isSub = !this.isSub;
  }
  onChangeCategory(value) {
    this.categoryForm.patchValue({
      parent_id: value
    })
  }
  onChangeLanguage(value) {
    this.categoryForm.patchValue({
      language_id: value
    })
    this.httpSvc.getData('categories/parent/' + value).pipe(first()).subscribe((response: any) => {
      this.categories = response.categories;
    });
  }
  closeAlert() {
    this.entryError = !this.entryError;
  }
  slugify(char) {
    let slug = char.toLowerCase().trim();
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
    slug = slug.replace(/[\s-]+/g, '-');
    if (slug != '-' || slug !== null) {
      this.categoryForm.patchValue({
        permalink: slug
      })
    } else {
      this.categoryForm.patchValue({
        permalink: ''
      })
    }
  }
  save() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.categoryForm.value.permalink == '-') {
      this.categoryForm.patchValue({
        permalink: null
      })
    } else {
      this.httpSvc.add(this.categoryForm.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data) {
              // this.loading = false;
              console.log(data);
              this.entryError = false;
              // if (data.status == 201) {
              this.categoryForm.reset();
              this.submitted = !this.submitted;
              this.location.back();
              //  } else {
              this.entryError = true;
              //  this.entryErrorMsg = data.msg;

              //  }
            } else {
              // this.loading = false;
              this.submitted = !this.submitted;
            }
          },
          error => {
            this.loading = false;
          });
    }
  }
}
