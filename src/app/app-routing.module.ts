import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KorbComponent } from './korb/korb.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "details/:id",component: DetailsComponent},
  {path: "korb", component: KorbComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
