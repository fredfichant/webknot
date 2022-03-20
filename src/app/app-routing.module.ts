import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'node-c',
    loadChildren: () =>
      import('./modules/application/constructions/constructions.module').then(
        (mod) => mod.ConstructionsModule
      ),
  },

  {
    path: 'domains',
    loadChildren: () =>
      import('./modules/application/domains/tutorial.module').then(
        (mod) => mod.TutorialModule
      ),
  },

  {
    path: 'drawn-knots',
    loadChildren: () =>
      import('./modules/application/drawn-knots/tutorial.module').then(
        (mod) => mod.TutorialModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/general/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/general/about/about.module').then(
        (mod) => mod.AboutModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
