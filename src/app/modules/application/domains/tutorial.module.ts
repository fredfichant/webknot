import { AmourVraieComponent } from './amour-vraie/amour-vraie.component';
import { ChapEEuComponent } from './chap-e/chap-e-eu/chap-e-eu.component';
import { ChapEEoComponent } from './chap-e/chap-e-eo/chap-e-eo.component';
import { ChapEEiComponent } from './chap-e/chap-e-ei/chap-e-ei.component';
import { ChapEEeComponent } from './chap-e/chap-e-ee/chap-e-ee.component';
import { VoixdialecticComponent } from './voixdialectic/voixdialectic.component';
import { ViesexeComponent } from './viesexe/viesexe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from 'src/app/shared/ng-material.module';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { MotionsComponent } from './motions/motions.component';
import { CapitalessonsComponent } from './capitalessons/capitalessons.component';
import { CorpsComponent } from './corps/corps.component';
import { ClitorneComponent } from './clitorne/clitorne.component';
import { DoctrinesComponent } from './doctrines/doctrines.component';
import { KnotNowComponent } from './knot-now/knot-now.component';
import { KnotFutureComponent } from './knot-future/knot-future.component';
import { KnotPastComponent } from './knot-past/knot-past.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ChromoComponent } from './chromo/chromo.component';
import { HistoireComponent } from './histoire/histoire.component';
import { HordeComponent } from './horde/horde.component';
import { InternationaleComponent } from './internationale/internationale.component';
import { IntersexuelleComponent } from './intersexuelle/intersexuelle.component';

import { Animation1Component } from 'src/app/animations/animation1/animation1.component';
import { Animation2Component } from 'src/app/animations/animation2/animation2.component';
import { Animation3Component } from 'src/app/animations/animation3/animation3.component';
import { Animation4Component } from 'src/app/animations/animation4/animation4.component';
import { Animation5Component } from 'src/app/animations/animation5/animation5.component';

@NgModule({
  declarations: [
    TutorialComponent,
    InvitationComponent,
    KnotPastComponent,
    KnotFutureComponent,
    KnotNowComponent,
    ChromoComponent,
    DoctrinesComponent,
    ClitorneComponent,
    HistoireComponent,
    HordeComponent,
    InternationaleComponent,
    IntersexuelleComponent,
    CorpsComponent,
    CapitalessonsComponent,
    MotionsComponent,
    ViesexeComponent,
    VoixdialecticComponent,
    ChapEEeComponent,
    ChapEEiComponent,
    ChapEEoComponent,
    ChapEEuComponent,
    AmourVraieComponent,

    Animation1Component,
    Animation2Component,
    Animation3Component,
    Animation4Component,
    Animation5Component,
  ],
  imports: [CommonModule, TutorialRoutingModule, NgMaterialModule],
  exports: [TutorialComponent],
})
export class TutorialModule {}
