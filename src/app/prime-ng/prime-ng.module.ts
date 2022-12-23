import { NgModule } from '@angular/core';

/* PrimeNg. Usando un módulo externo e importando desde él a app.modules, el código del app.modules queda más limpio. */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@NgModule({
  exports: [ButtonModule, CardModule, FieldsetModule, MenubarModule],
})
export class PrimeNgModule {}
