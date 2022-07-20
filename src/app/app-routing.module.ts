import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'signIn'
  },
  {
    path:"signIn",
    component:LoginComponent
  },
  {
    path:"search",
    component:SearchComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path:"results",
    component:ResultsComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: 'not-found', canActivate: [AuthenticationGuard], component: NotFoundComponent },
  { path: '**', redirectTo: 'signIn' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
