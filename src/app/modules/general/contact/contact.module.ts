import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],

  exports: [ContactComponent],
  declarations: [ContactComponent],
  providers: [],
})
export class ContactModule {}
