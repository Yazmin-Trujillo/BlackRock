import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';
import {Card, CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {StyleClassModule} from 'primeng/styleclass';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FirstQuestionComponent } from './components/first-question/first-question.component';
import { SecondQuestionComponent } from './components/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/third-question/third-question.component';
import { FourthQuestionComponent } from './components/fourth-question/fourth-question.component';
import { FifthQuestionComponent } from './components/fifth-question/fifth-question.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { InvestmentComponent } from './components/investment/investment.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PerformanceComponent,
    QuizComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    FourthQuestionComponent,
    FifthQuestionComponent,
    ProductComponent,
    InvestmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, //required to use ngModel in prime components (https://stackoverflow.com/a/67817027)
    ButtonModule,
    SidebarModule,
    ToolbarModule,
    InputTextModule,
    SelectButtonModule,
    CardModule,
    StyleClassModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
