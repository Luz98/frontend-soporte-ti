import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { MainComponent} from '../app/components/main/main.component'
import { CreateUserComponent} from '../app/components/create-user/create-user.component'
import { AddInventoryComponent} from '../app/components/add-inventory/add-inventory.component'
import { AddLicenseComponent} from '../app/components/add-license/add-license.component'
import { CreateTicketComponent} from '../app/components/create-ticket/create-ticket.component'

const routes: Routes = [{path:'', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path:'main', component:MainComponent, children: [
    {path: 'createUser', component: CreateUserComponent },
    {path:'addInventory', component: AddInventoryComponent},
    {path: 'addLicense', component: AddLicenseComponent},
    {path: 'createTicket', component: CreateTicketComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
