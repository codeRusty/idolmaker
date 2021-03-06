import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AccountService } from './services/account.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    HttpClientModule
  ],
  declarations: [AccountComponent, RegisterComponent],
  providers: [AccountService]
})
export class AccountModule { }
