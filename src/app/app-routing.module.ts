import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestpageComponent } from './testpage/testpage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path: 'testpage', component: TestpageComponent},
  {path: 'errorpage', component: ErrorpageComponent},
  {path: '**', redirectTo: 'errorpage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
