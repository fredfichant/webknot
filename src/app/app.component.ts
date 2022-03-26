import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-knot';
  today: any = new Date();
  start: any = new Date(1643761920000);
  startmillis: number = this.start.getTime();
  todaymillis: number = this.today.getTime();
  dursecondes: number =
    (this.todaymillis - this.startmillis) / 1000 / 60 / 60 / 24;
  // Ici, l'évènement dont on veut mesurer la durée :
  //faireQuelqueChosePendantLongtemps()
  //fin = Date.now()
  //duree = fin - debut // La durée écoulée, en millisecondes

  constructor(public translate: TranslateService) {
    translate.addLangs(['fr', 'ar', 'en', 'el', 'es', 'it', 'ja', 'ru', 'zh']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
