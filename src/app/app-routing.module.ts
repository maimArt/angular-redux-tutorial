import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberManagementViewComponent} from './planning/partyplaner/member-management-view/member-management-view.component'

const appRoutes: Routes = [
  {path: '', redirectTo: '/partyplaner', pathMatch: 'full'},
  {path: 'partyplaner', component: MemberManagementViewComponent},
  {path: '**', redirectTo: '/partyplaner', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
