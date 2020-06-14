import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VadminPageComponent } from './pages/vadmin-page/vadmin-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'vadmin', pathMatch: 'full'  },
  { path: 'vadmin', component: VadminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
