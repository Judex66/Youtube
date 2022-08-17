import {
  Component, OnInit,
} from '@angular/core';
import { Video } from 'src/app/video';
import FunctionService from '../../services/function.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export default class HeaderComponent implements OnInit {
  searchValue:string = '';

  initvideos: Video[] = [];

  outvideos: Video[] = [];

  keySort:string = 'statistics.dislikeCount';

  isReverce : boolean = false;

  isShowSetting : boolean = false;

  name:string = 'Your name';

  constructor(public service:FunctionService) {

  }

  ngOnInit() {
    this.name = JSON.parse(localStorage.getItem('token') || '');
  }

  title = 'youtube';

  onSearchSubmit() {
    this.service.onSearchSubmit(this.searchValue);
  }

  onToggleSettings() : void {
    this.isShowSetting = !this.isShowSetting;
  }

  // eslint-disable-next-line class-methods-use-this
  logout() {
    localStorage.removeItem('token');
  }
}
