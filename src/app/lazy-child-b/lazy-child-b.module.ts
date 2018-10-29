import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BComponent } from './component/b/b.component';
import { LazyChildBRoutingModule } from './lazy-child-b-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyChildBRoutingModule,
  ],
  declarations: [BComponent]
})
export class LazyChildBModule { }
