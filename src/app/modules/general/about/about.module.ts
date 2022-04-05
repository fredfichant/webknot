import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

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
  return new TranslateHttpLoader(http, './assets/i18n/about/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    // Translations.
    NgxTranslateCutModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true, // <-- PLAY WITH IT
      extend: true, // <-- PLAY WITH IT
    }),
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule {
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
