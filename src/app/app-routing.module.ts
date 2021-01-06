import { ListItemComponent } from './list-item/list-item.component';
import { SharedGuard } from './shared.guard';
import { LoginComponent } from './login/login.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"checklist", component:ChecklistComponent, canActivate: [SharedGuard]},
  {path:'list-item', component:ListItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
