import { LoginComponent } from './login/login.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"list", component:ChecklistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
