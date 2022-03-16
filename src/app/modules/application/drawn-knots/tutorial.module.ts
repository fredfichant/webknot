import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { ClustersComponent } from './clusters/clusters.component';
import { MetamorphosesComponent } from './metamorphoses/metamorphoses.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ShadeAdornementComponent } from './shade-adornement/shade-adornement.component';
import { StateEquationComponent } from './state-equation/state-equation.component';
import { RarityTestComponent } from './rarity-test/rarity-test.component';
import { ParticulateFormulaComponent } from './particulate-formula/particulate-formula.component';
import { MutationsComponent } from './mutations/mutations.component';
import { ClusterDrawComponent } from './cluster-draw/cluster-draw.component';
import { DefinitionComponent } from './definition/definition.component';
import { PacityComponent } from './pacity/pacity.component';
import { ReducibilityComponent } from './reducibility/reducibility.component';
import { NormalizationComponent } from './normalization/normalization.component';
import { TurnComponent } from './turn/turn.component';
import { KnotConstructionsComponent } from './knot-constructions/knot-constructions.component';
import { JacobComponent } from './jacob/jacob.component';
import { HomotonyComponent } from './homotony/homotony.component';



import { Animation6Component } from 'src/app/animations/animation6/animation6.component';


@NgModule({
  declarations: [
    TutorialComponent,
    ClustersComponent,
    MetamorphosesComponent,
    GraphsComponent,
    ShadeAdornementComponent,
    StateEquationComponent,
    RarityTestComponent,
    ParticulateFormulaComponent,
    MutationsComponent,
    ClusterDrawComponent,
    DefinitionComponent,
    PacityComponent,
    ReducibilityComponent,
    NormalizationComponent,
    TurnComponent,
    KnotConstructionsComponent,
    JacobComponent,
    HomotonyComponent,

    Animation6Component

  ],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
