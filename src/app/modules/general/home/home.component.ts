import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser'; //optimisation SEO

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;
  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.features = [
      {
        name: " let's draw knots",
        description:
          'the  book "plastic of rare knots" constitutes the systematic initiation to this new art-science. ',
        icon: 'fas fa-palette',
        link: 'drawn-knots',
      },
      {
        name: 'node constructions',
        description: 'collection of drawings',
        icon: 'fas fa-bezier-curve',
        link: 'node-c',
      },

      {
        name: 'contiguus domains',
        description: 'collection of texts',
        icon: 'fas fa-atom',
        link: 'domains',
      },
      /* a retirer{
          name: 'knotting blog',
          description: 'use blog service to post  nœdian texts and drawings',
          icon: 'fas fa-marker',
          link: 'blog'
        },*/
    ];
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function () {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
    this.titleService.setTitle('web-knot : application web icsografique');
    this.meta.addTag({
      name: 'web-knot',
      content: 'plastique nœudienne',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Cette application a été conçue pour faire connaitre la plastique nœudienne ' +
        ' permettre à la pratique du dessin des nœuds rares de se déployer à la surface de la planète selon sa destinée',
    });
  }
}
