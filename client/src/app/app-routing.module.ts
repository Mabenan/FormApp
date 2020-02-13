import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WufooFormComponent } from './wufoo-form/wufoo-form.component';
import { FinComponent } from './fin/fin.component';


const routes: Routes = [
  {path: '', component: WufooFormComponent},
  {path: 'fin', component: FinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
