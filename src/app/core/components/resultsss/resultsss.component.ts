import {
  Component,
} from '@angular/core';
import { Video } from 'src/app/video';
import FunctionService from '../../services/function.service';

@Component({
  selector: 'app-resultsss',
  templateUrl: './resultsss.component.html',
  styleUrls: ['./resultsss.component.scss'],
})
export default class ResultsssComponent {
  videos: Video[] = [];

  searching: any;

  isReverce: boolean = false;

  listKey: string = 'statistics.dislikeCount';

  constructor(private service:FunctionService) {
    this.service.getSearches();
    this.service.videos.subscribe((data) => {
      this.videos = data;
    });
    this.service.isReverce.subscribe((value) => {
      this.isReverce = value;
    });
    this.service.keySort.subscribe((value1) => {
      this.listKey = value1;
    });
  }
}
