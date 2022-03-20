import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructionsComponent } from './constructions.component';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { NgPrimeModule } from 'src/app/shared/ng-prime.module';

@NgModule({
  declarations: [ConstructionsComponent],

  imports: [CommonModule, ConstructionsRoutingModule, NgPrimeModule],
  exports: [ConstructionsComponent],
})
export class ConstructionsModule {}
