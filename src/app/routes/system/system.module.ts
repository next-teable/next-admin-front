import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SystemRoutingModule } from './system-routing.module';
import { UsersCurdComponent } from './users/users.component';
import { UsersCurdEditComponent } from './users/edit/edit.component';
import { UsersCurdViewComponent } from './users/view/view.component';
import { UsersSelectionComponent } from './users/selection/selection.component';
import { SystemRolesComponent } from './roles/roles.component';
import { SystemRolesEditComponent } from './roles/edit/edit.component';
import { SystemOrganizationsComponent } from './organizations/organizations.component';
import { SystemOrganizationsEditComponent } from './organizations/edit/edit.component';
import { SystemOrganizationsViewComponent } from './organizations/view/view.component';
import { RoleSelectionComponent } from './users/bindRoles/selection.component';
import { SystemAuditLogsComponent } from './audit-logs/audit-logs.component';
import { SystemAuditLogsViewComponent } from './audit-logs/view/view.component';
import { SystemDictsComponent } from './dicts/dicts.component';
import { SystemDictsEditComponent } from './dicts/edit/edit.component';
import { SystemDictsViewComponent } from './dicts/view/view.component';
import { SystemDictsItemEditComponent } from './dicts/item-edit/item-edit.component';
import { SystemSelectionEditComponent } from './selection/edit/edit.component';
import { ResetPwdComponent } from './users/resetPwd/resetPwd.component';
import { SystemSelectionViewComponent } from './selection/view/view.component';
import { SystemDlqComponent } from './dlq/dlq.component';
import { SystemDlqViewComponent } from './dlq/view/view.component';
import { SystemTenantsComponent } from './tenants/tenants.component';
import { SystemTenantsEditComponent } from './tenants/edit/edit.component';
import { SystemTenantsViewComponent } from './tenants/view/view.component';

const COMPONENTS = [
  UsersCurdComponent,
  SystemRolesComponent,
  SystemOrganizationsComponent,
  SystemAuditLogsComponent,
  SystemDictsComponent,
  SystemDlqComponent,
  SystemTenantsComponent,
  SystemTenantsComponent,
];

const COMPONENTS_NOROUNT = [
  UsersCurdEditComponent,
  UsersCurdViewComponent,
  UsersSelectionComponent,
  RoleSelectionComponent,
  SystemRolesEditComponent,
  SystemOrganizationsEditComponent,
  SystemOrganizationsViewComponent,
  SystemAuditLogsViewComponent,
  SystemDictsEditComponent,
  SystemDictsViewComponent,
  SystemDictsItemEditComponent,
  SystemSelectionEditComponent,
  SystemSelectionViewComponent,
  ResetPwdComponent,
  SystemDlqViewComponent,
  SystemTenantsEditComponent,
  SystemTenantsViewComponent,
];

@NgModule({
  imports: [SharedModule, SystemRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class SystemModule {}
