import { Component, Input } from '@angular/core';
import { Video } from 'src/app/video';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export default class ResultItemComponent {
  @Input() videos!: Video;
}
