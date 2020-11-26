import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './components/default/default.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {ProductUpdateComponent} from './components/product/product-update/product-update.component';
import {LoginComponent} from './components/login/login.component';
import {StoreListComponent} from './components/store/store-list/store-list.component';
import {StoreCreateComponent} from './components/store/store-create/store-create.component';
import {UserCreateComponent} from './components/user/user-create/user-create.component';
import {OrderListComponent} from './components/order/order-list/order-list.component';
import {OrderCreateComponent} from './components/order/order-create/order-create.component';

const routes: Routes = [
  {path: '', component: DefaultComponent},
  {
    path: 'products',
    children: [
      {path: '', component: ProductListComponent},
      {path: 'create', component: ProductCreateComponent},
      {path: ':id/update', component: ProductUpdateComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {
    path: 'stores',
    children: [
      {path: '', component: StoreListComponent},
      {path: 'create', component: StoreCreateComponent}
    ]
  },
  {path: 'users', component: UserCreateComponent},
  {
    path: 'orders',
    children: [
      {path: '', component: OrderListComponent},
      {path: 'create', component: OrderCreateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
