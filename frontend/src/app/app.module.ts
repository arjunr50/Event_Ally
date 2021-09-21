import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent, IvyCarouselModule } from 'angular-responsive-carousel';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { UpdateComponent } from './components/update/update.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    HomeComponent,
    EventsComponent,
    EventComponent,
    AddEventComponent,
    UpdateComponent,
    TermsComponent,
    PrivacyComponent,
    AboutComponent,
    NotfoundComponent,
    AdminHomeComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
