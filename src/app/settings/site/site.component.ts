import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT, Meta } from '@angular/platform-browser';
import * as helper from '../../helpers/common';
import {  Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  settingsForm: FormGroup;
  entryError: boolean = false;
  entryErrorMsg: string;
  status: any;
  submitted:boolean=false;
  loading:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private httpSvc: SettingsService,
    protected location: Location,
    @Inject(DOCUMENT) private dom: Document, private meta: Meta) {
      this.meta.addTag({ name: 'canonical', content: helper.conf.api + 'settings/site' });
  }

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      id:[''],
      site_name: ['', Validators.required],
      meta_keywords: [''],
      meta_description: [''],
      ga_code: [''],
      facebook: [''],
      twitter: [''],
      google_plus: [''],
      youtube_channel: [''],
      site_logo:['']
    });
  }
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result != "") {
            this.settingsForm.patchValue({
              site_logo:reader.result
          });
        }
      };
    }
  }
  get f() { return this.settingsForm.controls; }
  closeAlert() {
    this.entryError = !this.entryError;
  }
  
}
