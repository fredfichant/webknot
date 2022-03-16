import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

import { MotionsComponent } from './motions/motions.component';
import { CapitalessonsComponent } from './capitalessons/capitalessons.component';
import { CorpsComponent } from './corps/corps.component';
import { ChromoComponent } from './chromo/chromo.component';
import { InvitationComponent } from './invitation/invitation.component';
import { KnotFutureComponent } from './knot-future/knot-future.component';
import { KnotPastComponent } from './knot-past/knot-past.component';
import { KnotNowComponent } from './knot-now/knot-now.component';

import { DoctrinesComponent } from './doctrines/doctrines.component';
import { ClitorneComponent } from './clitorne/clitorne.component';
import { HistoireComponent } from './histoire/histoire.component';
import { HordeComponent } from './horde/horde.component';
import { InternationaleComponent } from './internationale/internationale.component';
import { IntersexuelleComponent } from './intersexuelle/intersexuelle.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./00-main/exercice.module').then((mod) => mod.ExerciceModule),
      },
      { path: 'chromo', component: ChromoComponent },
      { path: 'invitation', component: InvitationComponent },
      { path: 'knotfutur', component: KnotFutureComponent },
      { path: 'knotpast', component: KnotPastComponent },
      { path: 'knotnow', component: KnotNowComponent },
      { path: 'doctrines', component: DoctrinesComponent },
      { path: 'clitorne', component: ClitorneComponent },
      { path: 'histoire', component: HistoireComponent },
      { path: 'horde', component: HordeComponent },
      { path: 'internationale', component: InternationaleComponent },
      { path: 'intersexuelle', component: IntersexuelleComponent },
      { path: 'corps', component: CorpsComponent },
      { path: 'lessons', component: CapitalessonsComponent },
      { path: 'motions', component: MotionsComponent },
      {
        path: '',
        redirectTo: '/domains/invitation',
        pathMatch: 'full',
      },
      { path: '**', component: InvitationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialRoutingModule {}
