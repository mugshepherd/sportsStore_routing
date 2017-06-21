import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
// TODO(1.2) import route in app.module.ts
import { RouterModule } from '@angular/router';
// TODO(4.2.1) import guard file in app.module.ts
// import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  imports: [BrowserModule, StoreModule,
    // TODO(1.3) Add each route in app.module.ts
    RouterModule.forRoot([
      {
        path: 'store', component: StoreComponent,
        // TODO(4.2.2) register guard file for each route - store component
        // canActivate: [StoreFirstGuard]
      },
      {
        path: 'cart', component: CartDetailComponent,
        // TODO(4.2.3) register guard file for each route - CartDetail component
        // canActivate: [StoreFirstGuard]
      },
      {
        path: 'checkout', component: CheckoutComponent,
        // TODO(4.2.4) register guard file for each route - Checkout component
        // canActivate: [StoreFirstGuard]
      },
      { path: '**', redirectTo: '/store' }
    ])
],
  // TODO(4.2.5) register guard file as provider
  // providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
