import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilLexiqueComponent } from './accueil-lexique.component';

const routes: Routes = [
  { path: '', component: AccueilLexiqueComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilLexiqueRoutingModule {}
