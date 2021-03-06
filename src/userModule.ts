import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Users } from "./users";
import { CreateUser } from "./createUser";
import { EditUser } from "./editUser";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Users, CreateUser, EditUser, Layout],
    bootstrap: [Layout]
})
export class UserModule { }