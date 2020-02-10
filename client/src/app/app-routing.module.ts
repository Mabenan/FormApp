import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WufooFormComponent } from './wufoo-form/wufoo-form.component';


const routes: Routes = [
  {path: '', component: WufooFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
