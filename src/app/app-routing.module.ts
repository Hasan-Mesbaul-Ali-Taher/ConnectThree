import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1Component } from './level1/level1.component';

const routes: Routes = [
{path:"level1", component: Level1Component},
{path:'', pathMatch:'full', redirectTo:'level1'}  
//if no path, then go to the path of 'level1'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
