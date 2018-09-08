import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 posts:any;
  constructor(private postSvc:PostService) {

   }

  ngOnInit() {
    this.postSvc.getData('posts').pipe(first()).subscribe((response: any) => {
      this.posts = response.posts;
    });
  }

}
