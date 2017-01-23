import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { HackernewsApiService } from '../hackernews-api.service';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
items;
  constructor() {
     }

  ngOnInit() {
  }

}
