import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//Módulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app, lo que cambia el idioma de la aplicación.

import localEs from '@angular/common/locales/es-HN';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-HN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
