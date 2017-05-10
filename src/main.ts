import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// let Ps = require('perfect-scrollbar');

if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(AppModule);
