import { NgPrimeModule } from './../../../../shared/ng-prime.module';
import { AccueilLexiqueComponent } from './accueil-lexique.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilLexiqueRoutingModule } from './accueil-lexique-routing.module';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxTranslateCutModule } from 'ngx-translate-cut';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/glossary/', '.json');
}

@NgModule({
  declarations: [AccueilLexiqueComponent],
  providers: [],
  imports: [
    CommonModule,
    AccueilLexiqueRoutingModule,
    NgPrimeModule,

    // Translations.
    NgxTranslateCutModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [AccueilLexiqueComponent],
})
export class AccueiLexiqueModule {}
