import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionsComponent } from './constructions.component';

const routes: Routes = [
  { path: '', component: ConstructionsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructionsRoutingModule { }
