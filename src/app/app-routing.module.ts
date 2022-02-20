import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoService } from './demo.service';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"",
    component:SearchComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"results",
    component:ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
