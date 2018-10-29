import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AComponent } from './component/a/a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AComponent]
})
export class LazyChildAModule { }
