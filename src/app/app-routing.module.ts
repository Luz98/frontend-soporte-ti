import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { MainComponent} from '../app/components/main/main.component'
import { CreateUserComponent} from '../app/components/create-user/create-user.component'
import { AddInventoryComponent} from '../app/components/add-inventory/add-inventory.component'
import { AddLicenseComponent} from '../app/components/add-license/add-license.component'
import { CreateTicketComponent} from '../app/components/create-ticket/create-ticket.component'
import { CheckUsersComponent} from '../app/components/check-users/check-users.component'
import { CheckTicketComponent} from '../app/components/check-ticket/check-ticket.component'
import { CheckInventoryComponent} from '../app/components/check-inventory/check-inventory.component'
import { CheckLicenseComponent} from '../app/components/check-license/check-license.component'

const routes: Routes = [{path:'', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path:'main', component:MainComponent, children: [
    {path: 'createUser', component: CreateUserComponent },
    {path:'addInventory', component: AddInventoryComponent},
    {path: 'addLicense', component: AddLicenseComponent},
    {path: 'createTicket', component: CreateTicketComponent},
    {path: 'consultUser', component:CheckUsersComponent},
    {path: 'consultTicket',component: CheckTicketComponent},
    {path: 'consultInventory', component: CheckInventoryComponent },
    {path: 'consultLicense', component: CheckLicenseComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
