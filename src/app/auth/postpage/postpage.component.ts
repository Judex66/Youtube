import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import FunctionService from 'src/app/core/services/function.service';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.scss'],
})
export default class PostpageComponent implements OnInit {
  titleControl: FormControl = new FormControl();

  discriptionControl: FormControl = new FormControl();

  imgControl: FormControl = new FormControl();

  linkControl: FormControl = new FormControl();

  title:string | undefined;

  img:string | undefined;

  discription:string | undefined;

  link:string | undefined;

  constructor(public postservice: FunctionService) {}

  ngOnInit(): void {
    this.titleControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.discriptionControl = new FormControl('', [Validators.required, Validators.maxLength(255)]);
    this.linkControl = new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]);
  }

  postVideo() {
    if (this.titleControl.valid === true
      && this.discriptionControl.valid === true
      && this.linkControl.valid === true) {
      // eslint-disable-next-line max-len
      const newVideo = {
        snippet: {
          publishedAt: Date.now(),
          title: this.title,
          description: this.discription,
          thumbnails: {
            default: { url: this.img, width: 120, height: 90 },
            medium: { url: this.img, width: 320, height: 180 },
          },
        },
        statistics: {
          viewCount: 0,
          likeCount: 0,
          dislikeCount: 0,
          favoriteCount: 0,
          commentCount: 0,
        },
      };
      this.postservice.creatNewPost(newVideo).subscribe((data:any = []) => {
        console.log(data);
        console.log(this.titleControl.valid);
      });
    }
  }
}
