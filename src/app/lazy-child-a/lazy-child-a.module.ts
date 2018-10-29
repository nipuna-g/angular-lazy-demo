import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AComponent } from './component/a/a.component';
import { LazyChildARoutingModule } from './lazy-child-a-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyChildARoutingModule,
  ],
  declarations: [AComponent]
})
export class LazyChildAModule { }
