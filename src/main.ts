
import { enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { KeycloakService } from './app/core/auth/keycloak.service';
// if (environment.production) {
//   enableProdMode();
//   if(window){
//     window.console.log=function(){};
//   }
// }
// console.log = () => { };
// console.error = () => { };
// Deploy Develope
// KeycloakService.init()
// .then(() => {
//   const platform = platformBrowserDynamic();
//   platform.bootstrapModule( AppModule );
// } )
// .catch( function( error ) { console.log( JSON.stringify( error ) ); return; } );
// Deploy Staging and Production

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
