import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './shareds/header/header.component';
import { FooterComponent } from './shareds/footer/footer.component';
import { DefaultComponent } from './components/default/default.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-list/product-detail/product-detail.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { StoreListComponent } from './components/store/store-list/store-list.component';
import { StoreCreateComponent } from './components/store/store-create/store-create.component';
import { StoreDetailComponent } from './components/store/store-list/store-detail/store-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserCreateComponent } from './components/user/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    OrderListComponent,
    StoreListComponent,
    StoreCreateComponent,
    StoreDetailComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
