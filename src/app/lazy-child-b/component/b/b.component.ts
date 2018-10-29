import { LazyService } from './../../../lazy-parent/lazy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

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
