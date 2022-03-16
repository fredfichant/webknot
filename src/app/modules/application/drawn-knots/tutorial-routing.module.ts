import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';





import { ClustersComponent } from './clusters/clusters.component';
import { ClusterDrawComponent } from './cluster-draw/cluster-draw.component';
import { DefinitionComponent } from './definition/definition.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MetamorphosesComponent } from './metamorphoses/metamorphoses.component';
import { MutationsComponent } from './mutations/mutations.component';
import { NormalizationComponent } from './normalization/normalization.component';
import { PacityComponent } from './pacity/pacity.component';
import { ParticulateFormulaComponent } from './particulate-formula/particulate-formula.component';
import { RarityTestComponent } from './rarity-test/rarity-test.component';
import { ReducibilityComponent } from './reducibility/reducibility.component';
import { ShadeAdornementComponent } from './shade-adornement/shade-adornement.component';
import { StateEquationComponent } from './state-equation/state-equation.component';
import { TurnComponent } from './turn/turn.component';

import { KnotConstructionsComponent } from './knot-constructions/knot-constructions.component';
import { JacobComponent } from './jacob/jacob.component';
import { HomotonyComponent } from './homotony/homotony.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: '',
        loadChildren: () => import('./00-main/exercice.module')
          .then(mod => mod.ExerciceModule)
      },




      { path: 'clusters', component: ClustersComponent},
      { path: 'clusterdraw', component: ClusterDrawComponent },
      { path: 'definition', component: DefinitionComponent},
      { path: 'graphs', component: GraphsComponent},
      { path: 'metamorphoses', component: MetamorphosesComponent},
      { path: 'mutations', component: MutationsComponent},
      { path: 'normalization', component: NormalizationComponent},
      { path: 'pacity', component: PacityComponent},
      { path: 'particulate', component: ParticulateFormulaComponent},
      { path: 'rarity', component: RarityTestComponent},
      { path: 'reducibility', component: ReducibilityComponent},
      { path: 'shade', component: ShadeAdornementComponent},
      { path: 'equation', component: StateEquationComponent},
      { path: 'turn', component: TurnComponent},

      { path: 'kconstruction', component: KnotConstructionsComponent},
      { path: 'jacob', component: JacobComponent},
      { path: 'homotony', component: HomotonyComponent},





      {
        path: '',
        redirectTo: '/drawn-knots/definition',
        pathMatch: 'full'
      },
      { path: '**', component: DefinitionComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
