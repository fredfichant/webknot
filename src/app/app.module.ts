import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HomeComponent } from './modules/general/home/home.component';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//translate module
import { NgxTranslateCutModule } from 'ngx-translate-cut';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LOCATION_INITIALIZED } from '@angular/common';
import {
  ModuleTranslateLoader,
  IModuleTranslationOptions,
} from '@larscom/ngx-translate-module-loader';

/**
 * Configure all non-lazy loaded translations and namespace them
 * @see https://github.com/larscom/ngx-translate-module-loader
 */

export function ModuleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n';
  const options: IModuleTranslationOptions = {
    modules: [
      // Fetches file at e.g. /assets/i18n/en.json
      { baseTranslateUrl },
      // Fetches file at e.g. /assets/i18n/non-lazy/en.json
      { baseTranslateUrl, moduleName: 'about', namespace: 'about' },
      { baseTranslateUrl, moduleName: 'glossary', namespace: 'glossary' },
      { baseTranslateUrl, moduleName: 'draw', namespace: 'draw' },
    ],
  };
  return new ModuleTranslateLoader(http, options);
}
export function ApplicationInitializerFactory(
  translate: TranslateService,
  injector: Injector
) {
  return async () => {
    await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

    const defaultLang = 'en';
    translate.addLangs(['en', 'es', 'fr', 'it', 'ru', 'el', 'ja', 'zh']);
    translate.setDefaultLang(defaultLang);
    try {
      await translate.use(defaultLang).toPromise();
    } catch (err) {
      console.log(err);
    }
    console.log(`Successfully initialized ${defaultLang} language.`);
  };
}

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxTranslateCutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: ModuleHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    //PWA
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ApplicationInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
