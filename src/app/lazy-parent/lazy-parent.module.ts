import { LazyService } from './lazy.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyParentRoutingModule } from './lazy-parent-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyParentRoutingModule
  ],
  declarations: [],
  providers: [
    LazyService,
  ]
})
export class LazyParentModule { }
