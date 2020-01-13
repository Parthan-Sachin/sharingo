import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    public loginValue: string = '';

    constructor(private router: Router){}

    ngOnInit() {

    }

    login(){
        localStorage.removeItem('loginValue');
        localStorage.setItem('loginValue','true');
        console.log("here at login")
        this.router.navigate(['foodrecords']);
    }

    
}