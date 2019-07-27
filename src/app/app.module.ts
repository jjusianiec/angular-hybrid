import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UpgradeModule} from '@angular/upgrade/static';
import {AngularHomeComponent} from './angular-home/angular-home.component';
import moduleName from '../angularjs/descriptor.js';
import {NgHybridStateDeclaration, UIRouterUpgradeModule} from '@uirouter/angular-hybrid';

const states: NgHybridStateDeclaration[] = [
  {
    name: 'angular-home',
    url: '/angular-home',
    component: AngularHomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule.forRoot({
      states: states
    })
  ],
  providers: []
})
export class AppModule {

  constructor(private upgradeModule: UpgradeModule) {
  }

  public ngDoBootstrap() {
    // Intialize the AngularJS Module
    this.upgradeModule.bootstrap(document.body, [moduleName]);
  }

}
