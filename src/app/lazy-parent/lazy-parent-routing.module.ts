import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'a',
        loadChildren: '../lazy-child-a/lazy-child-a.module#LazyChildAModule'
    },
    {
        path: 'b',
        loadChildren: '../lazy-child-b/lazy-child-b.module#LazyChildBModule'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyParentRoutingModule { }
