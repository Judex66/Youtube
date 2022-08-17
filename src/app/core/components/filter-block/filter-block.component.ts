import {
  Component, Input,
} from '@angular/core';
import FunctionService from '../../services/function.service';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss'],
})
export default class FilterBlockComponent {
  @Input() isShowSetting : boolean = false;

  constructor(private service:FunctionService) {

  }

  getKey(key:string) {
    this.service.getSettings(key);
  }
}
