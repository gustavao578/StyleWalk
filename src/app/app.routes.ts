import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel';
import { HomeComponent } from './pages/home/home';
import { ForgotPasswordComponent } from './forgot-password/forgot-password';
import { RegisterComponent } from './pages/register/register';
import { Lancamentos } from './pages/lancamentos/lancamentos';
import { Masculino } from './pages/masculino/masculino';
import { Feminino } from './pages/feminino/feminino';
import { Infantil } from './pages/infantil/infantil';
import { Esportes } from './pages/esportes/esportes';
import { WishlistComponent } from './pages/listadesejo/listadesejo';
import { CheckoutComponent } from './pages/checkout/checkout';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'lancamentos', component: Lancamentos },
  { path: 'masculino', component: Masculino },
  { path: 'feminino', component: Feminino },
  { path: 'infantil', component: Infantil },
  { path: 'esportes', component: Esportes },
  { path: 'wishlist', component: WishlistComponent},
  { path: 'checkout', component:  CheckoutComponent},
  {path: 'sacola', loadComponent: () => import('./pages/cart/cart').then(m => m.CartComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }