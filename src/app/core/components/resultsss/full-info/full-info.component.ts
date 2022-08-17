import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import FunctionService from 'src/app/core/services/function.service';
import { Video } from 'src/app/video';

@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.scss'],
})
export default class FullInfoComponent {
  video!: Video | undefined;

  private routeSubscription: Subscription;

  constructor(private service:FunctionService, private route:ActivatedRoute) {
    this.routeSubscription = route.params.subscribe((params) => {
      this.video = this.service.getCradById(params['id']);
    });
  }
}
