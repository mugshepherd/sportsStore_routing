import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
// TODO(1.2) import route in app.module.ts
// import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  imports: [BrowserModule, StoreModule,
    // TODO(1.3) Add each route in app.module.ts
    // RouterModule.forRoot([
    //   { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
    //   { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard] },
    //   { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard] },
    //   { path: '**', redirectTo: '/store' }
    // ])
],
  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
