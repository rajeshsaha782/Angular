import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user-component/user-component.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    UserComponent
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
