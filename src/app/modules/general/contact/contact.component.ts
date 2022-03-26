import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  /**
   * Comment out this if `isolated: false` because this is only need when
   * the module is disconnected from parent translation events, only in
   * that case we need to handle the event propagation ourselves... Which
   * is a bad workaround in my opinion...
   */

  ngOnInit() {
    this.translate.use(this.translate.store.currentLang);
  }
}
