import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchListComponent } from 'src/components/watch-list/watch-list.component';
import { RequestFormComponent } from 'src/components/request-form/request-form.component';
import { CheckNameDirective } from 'src/components/watch-list/name-checker.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ServiceWorkerModule } from '@angular/service-worker';
import { OfflineComponent } from './components/offline/offline.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailedComponent } from './pages/movie-detailed/movie-detailed.component';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { LoginComponent } from './pages/login/login.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzIconModule} from "ng-zorro-antd/icon";
import { LogoComponent } from './components/logo/logo.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { RegisterComponent } from './pages/register/register.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    RequestFormComponent,
    CheckNameDirective,
    HeaderComponent,
    SidebarComponent,
    OfflineComponent,
    HomeComponent,
    MovieDetailedComponent,
    LoginComponent,
    LogoComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NzAnchorModule,
    NzInputModule,
    NzToolTipModule,
    NzIconModule,
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
