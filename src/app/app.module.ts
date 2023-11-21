import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from  '@angular/material/button' ;
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AddLicenseComponent } from './components/add-license/add-license.component';
import { CheckTicketComponent } from './components/check-ticket/check-ticket.component';
import { CheckInventoryComponent } from './components/check-inventory/check-inventory.component';
import { CheckLicenseComponent } from './components/check-license/check-license.component';
import { CheckUsersComponent } from './components/check-users/check-users.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    CreateUserComponent,
    CreateTicketComponent,
    AddInventoryComponent,
    AddLicenseComponent,
    CheckTicketComponent,
    CheckInventoryComponent,
    CheckLicenseComponent,
    CheckUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
