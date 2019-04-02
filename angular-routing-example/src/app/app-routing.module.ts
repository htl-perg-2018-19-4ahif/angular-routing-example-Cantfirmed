import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlistComponent } from './plist/plist.component';
import { PdetailsComponent } from './pdetails/pdetails.component';
const routes: Routes = [
  {path: 'pokemon', component: PlistComponent },
  {path: 'pokemon/:id', component: PdetailsComponent },
  {path: '', redirectTo: '/pokemon', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
