import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';

import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    AvatarModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    DividerModule,
    EditorModule,
    FileUploadModule,
    FieldsetModule,
    HttpClientModule,
    InputTextModule,
    MultiSelectModule,
    MessageModule,
    MenuModule,

    SelectButtonModule,
    PaginatorModule,
    ProgressSpinnerModule,
    TabViewModule,

    ToolbarModule,
    TooltipModule,
  ],

  exports: [
    CommonModule,
    AccordionModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    DividerModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    HttpClientModule,
    InputTextModule,
    MenuModule,
    MultiSelectModule,
    MessageModule,
    ProgressSpinnerModule,
    PaginatorModule,
    SelectButtonModule,
    TabViewModule,

    ToolbarModule,
    TooltipModule,
  ],
})
export class NgPrimeModule {}
