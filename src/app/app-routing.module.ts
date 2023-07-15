import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddComponent } from './Components/add/add.component';
import { DeleteComponent } from './Components/delete/delete.component';
const routes: Routes = [
  {
    path: '',component: DashboardComponent
  },
  { path: 'add', component: AddComponent },
  { path: 'delete', component: DeleteComponent },
  { path: '**', component: ErrorComponent }

  // Add more route configurations as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
