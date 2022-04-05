import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.use(this.translate.store.currentLang);
  }
}
