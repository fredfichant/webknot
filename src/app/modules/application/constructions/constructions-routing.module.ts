import { JacobComponent } from './../drawn-knots/jacob/jacob.component';
import { Table8Component } from './table8/table8.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionsComponent } from './constructions.component';
import { Table9Component } from './table9/table9.component';

const routes: Routes = [
  {
    path: '',
    component: ConstructionsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./00-main/exercice.module').then((mod) => mod.ExerciceModule),
      },
      { path: 'table8', component: Table8Component },
      { path: 'table9', component: Table9Component },
      { path: 'jacob2', component: JacobComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionsRoutingModule {}
