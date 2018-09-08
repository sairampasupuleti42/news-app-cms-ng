import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '../../../services/settings.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  languageForm: FormGroup;
  entryError: boolean = false;
  entryErrorMsg: string;
  status: any;
  submitted:boolean=false;
  loading:boolean=false;

  constructor(
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
    this.submitted = true;
    if (this.languageForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.languageForm.value.permalink == '-') {
      this.languageForm.patchValue({
        permalink: null
      })
    } else {
      this.httpSvc.add(this.languageForm.value,'languages')
        .pipe(first())
        .subscribe(
          data => {
            if (data) {
              this.entryError = false;
              this.languageForm.reset();
              this.location.back();
            } else {
              
            }
          },
          error => {
            this.loading = false;
            this.submitted=false;
          });
    }
  }
}
