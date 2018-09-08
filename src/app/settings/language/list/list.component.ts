import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  languages: any;
  constructor( private settingsSvc: SettingsService) { }

  ngOnInit() {
    this.getLanguages();
  }
  deleteLanguage(id: number, index) {
    if (confirm('Are you sure you want to delete ?')) {
      this.settingsSvc.deleteById(id).pipe(first()).subscribe(response => {
       this.getLanguages();
      });
    }
  }
  getLanguages() {
    this.settingsSvc.getData('languages').pipe(first()).subscribe((response: any) => {
      this.languages = response.languages;
    });
  }
}
