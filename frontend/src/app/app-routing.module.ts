import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { UpdateComponent } from './components/update/update.component';
import { AddEventComponent } from "./components/add-event/add-event.component";
import { TermsComponent } from "./components/terms/terms.component";
import { PrivacyComponent } from "./components/privacy/privacy.component";
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: '404', component: NotfoundComponent },
  // { path: '**', redirectTo: '/404' },
  { path: 'index', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'userhome', component: UserHomeComponent, canActivate: [AuthGuard] },
  { path: "events", component: EventsComponent, canActivate: [AuthGuard] },
  { path: "event", component: EventComponent, canActivate: [AuthGuard] },
  { path: "update", component: UpdateComponent, canActivate: [AuthGuard] },
  { path: "addEvent", component: AddEventComponent, canActivate: [AuthGuard] },
  { path: "terms", component: TermsComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "about", component: AboutComponent },
  { path: "adminhome", component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotfoundComponent }, { path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
