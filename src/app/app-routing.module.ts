import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListgamesComponent } from './components/listgames.component';
import { NewgameComponent } from './components/newgame.component';

const routes: Routes = [
  { path:'newgame',component:NewgameComponent},
  { path:'listgames',component:ListgamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
