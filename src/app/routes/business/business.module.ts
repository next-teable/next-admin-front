import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { BusinessRoutingModule } from './business-routing.module';
import { PaperComponent } from './paper/paper.component';
import { PaperEditComponent } from './paper/edit/edit.component';

const COMPONENTS = [PaperComponent];
const COMPONENTS_NOROUNT = [PaperEditComponent];

@NgModule({
  imports: [SharedModule, BusinessRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class BusinessModule {}
