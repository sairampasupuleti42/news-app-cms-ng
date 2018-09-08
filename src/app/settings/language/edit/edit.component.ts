import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SettingsService } from '../../../services/settings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  languageForm: FormGroup;
  entryError: boolean = false;
  entryErrorMsg: string;
  status: any;
  submitted: boolean = false;
  loading: boolean = false;
  language: any;
  constructor(private router: Router,

    private formBuilder: FormBuilder,
    private httpSvc: SettingsService,
    protected location: Location
  ) {
    this.status = [
      {
        id: 0,
        name: 'Inactive'
      }, {
        id: 1,
        name: 'Active'
      }
    ]
  }

  ngOnInit() {
    this.languageForm = this.formBuilder.group({
      name: ['', Validators.required],
      permalink: ['', Validators.required],
      status: '1',
      created_by: '1'
    });
    this.httpSvc.getData('languages/' + this.router.url.split('/')[5]).pipe(first()).subscribe((response: any) => {
      this.language = response.category;
      this.languageForm.setValue(response.category);
    });
  }

  get f() { return this.languageForm.controls; }
  closeAlert() {
    this.entryError = !this.entryError;
  }
  slugify(char) {
    let slug = char.toLowerCase().trim();
    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');
    if (slug != '-' || slug !== null) {
      this.languageForm.patchValue({
        permalink: slug
      })
    } else {
      this.languageForm.patchValue({
        permalink: ''
      })
    }
  }
  save() {

  }
}
