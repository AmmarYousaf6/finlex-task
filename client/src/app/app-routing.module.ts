import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customer-service',
    pathMatch: 'full'
  },
  {
    path: 'customer-service',
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
