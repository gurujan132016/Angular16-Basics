import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ApplicationRef } from '@angular/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then((moduleRef) => {
    const appRef = moduleRef.injector.get(ApplicationRef);
    appRef.isStable.subscribe((isStable: boolean) => {
      if (isStable) {
        console.log('Application is stable');
      }
    });
  })
  .catch(err => console.error(err));
