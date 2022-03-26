import { AccueilLexiqueComponent } from './accueil-lexique/accueil-lexique.component';
import { Table8Component } from './table8/table8.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionsComponent } from './constructions.component';
import { Table9Component } from './table9/table9.component';
import { VueTable10Component } from './vue-table10/vue-table10.component';
import { VueTable11Component } from './vue-table11/vue-table11.component';
import { VueTable12Component } from './vue-table12/vue-table12.component';
import { VueTable13Component } from './vue-table13/vue-table13.component';
import { VueTable14Component } from './vue-table14/vue-table14.component';
import { VueTable15Component } from './vue-table15/vue-table15.component';

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
      {
        path: 'mailing',
        loadChildren: () =>
          import(`./accueil-lexique/accueil-lexique.module`).then(
            (mod) => mod.AccueiLexiqueModule
          ),
      },

      { path: 'table8', component: Table8Component },
      { path: 'table9', component: Table9Component },
      { path: 'table10', component: VueTable10Component },
      { path: 'table11', component: VueTable11Component },
      { path: 'table12', component: VueTable12Component },
      { path: 'table13', component: VueTable13Component },
      { path: 'table14', component: VueTable14Component },
      { path: 'table15', component: VueTable15Component },
      { path: 'lexique', component: AccueilLexiqueComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionsRoutingModule {}
