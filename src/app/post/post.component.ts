import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number = 0;
  @Input() postCreatedAt: Date;

  constructor() {
    this.postCreatedAt = new Date();
  }

  ngOnInit() {
  }

  onLike() {
    this.postLoveIts ++;
  }

  onDislike() {
    this.postLoveIts --;
  }

  getColor() {
    if(this.postLoveIts < 0){
      return "red";
    } else if (this.postLoveIts > 0){
      return "green";
    }
  }
}
