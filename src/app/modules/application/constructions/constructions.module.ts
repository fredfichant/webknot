import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructionsComponent } from './constructions.component';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { NgPrimeModule } from 'src/app/shared/ng-prime.module';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  LangChangeEvent,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { NgxTranslateCutModule } from 'ngx-translate-cut';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/glossary/', '.json');
}
@NgModule({
  declarations: [ConstructionsComponent],

  imports: [
    CommonModule,
    ConstructionsRoutingModule,
    NgPrimeModule,
    // Translations.
    NgxTranslateCutModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
      extend: true, // <-- PLAY WITH IT
    }),
  ],
  exports: [ConstructionsComponent],
})
export class ConstructionsModule {
  /**
   * === README ========================================================================
   * This block is not needed if you use `isolate: false`. But with `isolate: false` you
   * cannot read the lazy-specific translations, even if you set `extend: true`.
   *
   * PROBLEM: I can't have a configuration that allows reading translations from parent
   * non-lazy modules at the same time I read the lazy loaded module files.
   *
   *   To make a child module extend translations from parent modules use `extend: true`.
   *   This will cause the service to also use translations from its parent module.
   *
   *   You can also isolate the service by using `isolate: true`. In which case the service
   *   is a completely isolated instance (for translations, current lang, events, ...).
   *   Otherwise, by default, it will share its data with other instances of the service
   *   (but you can still use a different loader/compiler/parser/handler even if you don't
   *   isolate the service).
   * ====================================================================================
   * */
  constructor(public translationService: TranslateService) {
    const currentLang = this.translationService.currentLang;
    this.translationService.currentLang = '';
    this.translationService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        console.log(' ==> ContactModule ', lang);
        this.translationService.use(lang.lang);
      }
    );
  }
}
