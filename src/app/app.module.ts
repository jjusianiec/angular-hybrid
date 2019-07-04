import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule, Routes} from '@angular/router';
import {AngularHomeComponent} from './angular-home/angular-home.component';
import moduleName from '../angularjs/descriptor';

const routes: Routes = [
  {
    path: '', children: [
      {path: 'angular-home', component: AngularHomeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent,
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    this.upgrade.bootstrap(document.getElementById('angularjsContainer'), [moduleName]);
  }

}
