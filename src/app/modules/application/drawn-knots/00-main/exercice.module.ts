import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExerciceComponent],
  providers: [],
  imports: [
    ExerciceRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ExerciceComponent],
})
export class ExerciceModule {}
