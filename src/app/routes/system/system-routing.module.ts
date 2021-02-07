import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCurdComponent } from './users/users.component';
import { SystemRolesComponent } from './roles/roles.component';
import { SystemOrganizationsComponent } from './organizations/organizations.component';
import { SystemAuditLogsComponent } from './audit-logs/audit-logs.component';
import { SystemDictsComponent } from './dicts/dicts.component';
import { SystemDlqComponent } from './dlq/dlq.component';
const routes: Routes = [
  { path: 'users', component: UsersCurdComponent },
  { path: 'roles', component: SystemRolesComponent },
  { path: 'organizations', component: SystemOrganizationsComponent },
  { path: 'audit-logs', component: SystemAuditLogsComponent },
  { path: 'dicts', component: SystemDictsComponent },
  { path: 'dlq', component: SystemDlqComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
