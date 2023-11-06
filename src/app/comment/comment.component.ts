import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { Comments } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {


  comments$ !: any;

   comment$ = this.activatedroute.data.pipe(pluck('comments'));


   comments : Comments[] = [];

  constructor( private commentService : CommentService,

    private activatedroute :  ActivatedRoute) {}




 ngOnInit()
 {
  this.comments$ = this.commentService.getComments();

//  this.activatedroute.data.subscribe(data => console.log(data['comments']))

this.activatedroute.data.subscribe((data) =>

{
  this.comments = data['comments'];
})

 }

}
