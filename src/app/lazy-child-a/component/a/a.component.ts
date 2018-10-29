import { LazyService } from './../../../lazy-parent/lazy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  get count() {
    return this.lazyService.count;
  }

  increaseCount() {
    this.lazyService.increaseCount();
  }

  constructor(private lazyService: LazyService) {

  }

  ngOnInit() {
  }
}
