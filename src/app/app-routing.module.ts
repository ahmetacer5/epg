import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ChannelsViewComponent } from './views/channels-view/channels-view.component';
import { DetailLayoutComponent } from './layouts/detail-layout/detail-layout.component';
import { ProgramViewComponent } from './views/program-view/program-view.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: 'channels', pathMatch: 'full'},
      {path: 'channels', component: ChannelsViewComponent}
    ]
  },
  {
    path: 'program', component: DetailLayoutComponent,
    children: [
      {path: ':program_id', component: ProgramViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
