import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { NgxTranslateCutModule } from 'ngx-translate-cut';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ShareButtonsModule,
    ShareIconsModule,

    NgxTranslateCutModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],

  exports: [ContactComponent],
  declarations: [ContactComponent],
  providers: [],
})
export class ContactModule {}
