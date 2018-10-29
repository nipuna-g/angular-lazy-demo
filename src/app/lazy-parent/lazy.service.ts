import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class LazyService {

  constructor(private toastr: ToastrService) {
    this.toastr.success('Lazy Service Initialized!');
  }

  count: number = 0;

  public increaseCount() {
    this.count = this.count + 1;
  }

}
