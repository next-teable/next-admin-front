import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperComponent } from './paper/paper.component';

const routes: Routes = [

  { path: 'paper/:status', component: PaperComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
