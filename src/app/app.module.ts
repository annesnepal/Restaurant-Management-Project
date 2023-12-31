import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestroComponent } from './components/pages/add-restro/add-restro.component';
import { ListRestroComponent } from './components/pages/list-restro/list-restro.component';
import { UpdateRestroComponent } from './components/pages/update-restro/update-restro.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './components/pages/side-nav/side-nav.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LogoutConfirmDialogComponent } from './components/pages/header/logout-confirm-dialog/logout-confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddRestroComponent,
    ListRestroComponent,
    UpdateRestroComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
    LogoutConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
    }),
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
