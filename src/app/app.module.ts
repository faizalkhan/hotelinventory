import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import {   HTTP_INTERCEPTORS, HttpClientModule }  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { app_config, app_service_config } from './AppConfig/appconfig.service';
import { BrowserModule } from '@angular/platform-browser';
import { PromisevsObservableComponent } from './promisevs-observable/promisevs-observable.component';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
import { HeaderModule } from './header/header.module';
import { routeConfigToken } from './services/routeConfig.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './errorhandler.service';




function initfactory(initService :InitService)
{
  return  () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    PromisevsObservableComponent,
    AppNavComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule

  ],
  providers: [
    {
      provide : app_service_config,
      useValue : app_config
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi : true
    },
    {
      provide : APP_INITIALIZER,
      useFactory : initfactory,
      deps : [InitService],
      multi : true
    },
    {
      provide : routeConfigToken,
      useValue : {title : 'Home'}
    },
    {
      provide :  ErrorHandler,
      useClass : GlobalErrorHandler
    }



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
