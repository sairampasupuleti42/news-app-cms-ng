import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { first,filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  categories: any;
  loading: boolean = false;
  submitted: boolean = false;
  entryError: boolean = false;
  entryErrorMsg: string;
  languages: any;
  status: any;
  postForm: FormGroup;
  config:any;
  checked_categories=[]; 
  constructor(
    private formBuilder: FormBuilder,
    private httpSvc: CategoryService,
    protected location: Location,
    protected postSvc:PostService
  ) { this.status = [{ id: 0, name: 'Inactive' }, {id: 1, name: 'Active' }]; }
  disabled = true;
  public options = { readonly: undefined, placeholder: '+ Tag'};
  showCategories:boolean=false;
  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      language_id: ['', Validators.required],
      category_id: ['',Validators.required],
      permalink: ['', Validators.required],
      status: ['1'],
      created_by: ['1'],
      description: ['',Validators.required],
      image: ['',Validators.required],
      tags: [],
      is_hightlight:['']
    });
    this.httpSvc.getData('categories/parent/0').pipe(first()).subscribe((response: any) => {
      this.categories = response.categories;
    });
    this.httpSvc.getData('languages').pipe(first()).subscribe((response: any) => {
      this.languages = response.languages;
    });
    this.config = {
      height: 250,
      theme: 'modern',
      // powerpaste advcode toc tinymcespellchecker a11ychecker mediaembed linkchecker help
      plugins: 'print preview   fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image imagetools link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern',
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | image upload',
      image_advtab: true,
      imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
      templates: [
        { title: 'Test template 1', content: 'Test 1' },
        { title: 'Test template 2', content: 'Test 2' }
      ],
      content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//skin.tinymce.com/css/preview.content.css'
      ]
    };
  }
  get f() { return this.postForm.controls; }
  tempArr: any = { "category_ids": [] };
  onChangeCategory(event, category: any){ 
    this.tempArr.category_ids.push(category.id);
  }
  onChangeLanguage(value) {
    this.postForm.patchValue({
      language_id: value
    })
    this.httpSvc.getData('categories/parent/' + value).pipe(first()).subscribe((response: any) => {
      this.categories = response.categories;
    });
    this.showCategories=true;
  }
  closeAlert() {
    this.entryError = !this.entryError;
  }
  onCheckHighlight(event){
    this.postForm.patchValue({
     is_hightlight: (event.target.checked) ? 'Yes' :'No'
    });    
  }
  
  updateChecked(value,event){
    if(event.target.checked){
      this.checked_categories.push(value);
    }
    else if (!event.target.checked){
      let indexx = this.checked_categories.indexOf(value);
      this.checked_categories.splice(indexx,1);
    }else{
      this.checked_categories=[];
    }
  }
  slugify(char) {
    let slug = char.toLowerCase().trim();
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
    slug = slug.replace(/[\s-]+/g, '-');
    if (slug != '-' || slug !== null) {
      this.postForm.patchValue({
        permalink: slug
      })
    } else {
      this.postForm.patchValue({
        permalink: ''
      })
    }
  }
  save() {
    this.postForm.patchValue({
      category_id:this.checked_categories
    });
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    this.loading = true;
   
    if (this.postForm.value.permalink == '-') {
      this.postForm.patchValue({
        permalink: null
      })
    } else {
      this.postSvc.add(this.postForm.value)
        .pipe(
          first()
         )
         .subscribe(
           data => {
             if (data) {
               this.entryError = false;
               this.postForm.reset();
               this.submitted = !this.submitted;
               this.location.back();
             } else {
               this.submitted = !this.submitted;
             }
           },
           error => {
             this.loading = false;
             this.submitted = !this.submitted;
         });
     }
  }
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result != "") {
            this.postForm.patchValue({
              image:reader.result
          });
        }
      };
    }
  }
  onSelect(event){

  }
}