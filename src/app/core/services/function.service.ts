import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Video } from 'src/app/video';

@Injectable()
export default class FunctionService {
  searchValue:string = '';

  private readonly outvideos = new BehaviorSubject<Video[]>([]);

  public videos: Observable<Video[]> = this.outvideos.asObservable();

  initvideos: Video[] = [];

  keySort = new BehaviorSubject<string>('statistics.dislikeCount');

  isReverce = new BehaviorSubject<boolean>(false);

  isShowSetting = new BehaviorSubject<boolean>(false);

  constructor(public httpClient:HttpClient) {

  }

  getSearches() {
    this.httpClient.get('http://localhost:3000/posts').subscribe((data:any = []) => {
      this.outvideos.next(data);
      this.initvideos = data;
    });
  }

  title = 'youtube';

  getSettings(key: string) {
    this.keySort.next(key);
    this.isReverce.next(!this.isReverce.value);
    console.log(key);
  }

  onSearchSubmit(searchValue:string) {
    // eslint-disable-next-line eqeqeq
    if (searchValue == '') {
      this.outvideos.next(this.initvideos);
    } else {
      // eslint-disable-next-line max-len
      const searchResults = this.initvideos.filter((video) => video.snippet.title.toLocaleLowerCase()
        .match(searchValue.toLocaleLowerCase()));
      this.outvideos.next(searchResults);
      console.log(searchResults);
    }
    console.log(searchValue);
  }

  onToggleSettings() : void {
    this.isShowSetting.next(!this.isShowSetting.value);
  }

  getCradById(id:string):Video | undefined {
    return this.initvideos.find((item) => item.id === id);
  }

  creatNewPost(postBody:any = []) {
    return this.httpClient.post('http://localhost:3000/posts', postBody);
  }
}
