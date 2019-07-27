import {enableProdMode, NgZone} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {UIRouter, UrlService} from '@uirouter/core';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    // get() the UIRouter instance from DI to initialize the router
    const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;
    // Instruct UIRouter to listen to URL changes
    const startUIRouter = () => {
      urlService.listen();
      urlService.sync();
    };
    platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
  })
  .catch(err => console.error(err));

