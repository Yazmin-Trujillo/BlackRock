import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'performance', component: PerformanceComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'invstment', component: InvestmentComponent},
  { path: 'p', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
