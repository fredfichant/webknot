import { AmourVraieComponent } from './amour-vraie/amour-vraie.component';
import { ChapEEuComponent } from './chap-e/chap-e-eu/chap-e-eu.component';
import { ChapEEoComponent } from './chap-e/chap-e-eo/chap-e-eo.component';
import { ChapEEiComponent } from './chap-e/chap-e-ei/chap-e-ei.component';
import { ChapEEeComponent } from './chap-e/chap-e-ee/chap-e-ee.component';
import { ViesexeComponent } from './viesexe/viesexe.component';

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
import { VoixdialecticComponent } from './voixdialectic/voixdialectic.component';

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
      { path: 'viesexe', component: ViesexeComponent },
      { path: 'voixdialectic', component: VoixdialecticComponent },
      { path: 'chap-e-ee', component: ChapEEeComponent },
      { path: 'chap-e-ei', component: ChapEEiComponent },
      { path: 'chap-e-eo', component: ChapEEoComponent },
      { path: 'chap-e-eu', component: ChapEEuComponent },
      { path: 'amour-vraie', component: AmourVraieComponent },

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
