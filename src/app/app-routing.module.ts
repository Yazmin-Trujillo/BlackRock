import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FirstQuestionComponent } from './components/first-question/first-question.component';
import { SecondQuestionComponent } from './components/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/third-question/third-question.component';
import { FourthQuestionComponent } from './components/fourth-question/fourth-question.component';
import { FifthQuestionComponent } from './components/fifth-question/fifth-question.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'performance', component: PerformanceComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'first-question', component: FirstQuestionComponent},
  { path: 'second-question', component: SecondQuestionComponent},
  { path: 'third-question', component: ThirdQuestionComponent},
  { path: 'fourth-question', component: FourthQuestionComponent},
  { path: 'fifth-question', component: FifthQuestionComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'invstment', component: InvestmentComponent},
  { path: 'p', component: ProductComponent},
  { path:'investment-component', component: InvestmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
