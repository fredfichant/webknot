import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    CdkAccordionModule,
    MatButtonModule,

    MatExpansionModule

  ],
  exports : [
CommonModule,
CdkAccordionModule,
MatButtonModule,
MatExpansionModule
  ]
})
export class NgMaterialModule { }
