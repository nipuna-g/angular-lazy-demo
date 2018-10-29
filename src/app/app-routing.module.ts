import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'lazy-parent',
        loadChildren: './lazy-parent/lazy-parent.module#LazyParentModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
