import { Routes } from '@angular/router';
import { LoginComponent } from './pagess/login/login.component';
import { SignUpComponent } from './pagess/signup/signup.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },

    {
        path: "signup",
        component: SignUpComponent
    }
];
