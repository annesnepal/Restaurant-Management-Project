import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ListRestroComponent } from '../../pages/list-restro/list-restro.component';
import { AddRestroComponent } from '../../pages/add-restro/add-restro.component';
import { UpdateRestroComponent } from '../../pages/update-restro/update-restro.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { HomeComponent } from 'src/app/components/pages/home/home.component';
import { TestComponent } from '../../pages/test/test.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'add',
        component: AddRestroComponent,
      },
      {
        path: 'list',
        component: ListRestroComponent,
      },
      {
        path: 'update/:id',
        component: UpdateRestroComponent,
      },
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
