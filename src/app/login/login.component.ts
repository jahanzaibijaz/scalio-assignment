import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('content') content!: TemplateRef<any>;

  form :FormGroup | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required ]

      
  });
  if(localStorage.getItem('token')){
      this.router.navigate(["search"]);
    }
  }
  get data() { return this.form?.controls; }

  onSubmit() {
    if (this.data?.email.value === 'scalio' && this.data?.password.value === 'ds'){
      localStorage.setItem('token', 'true');
      if(localStorage.getItem('token')){
        setTimeout(() =>{
          
          this.router.navigate(["search"]);
        },3000)
        this.toastr.success('You are loggedIn! Please wait while we are navigating..','Success!',{
          timeOut:3000,
          progressBar:true,
          positionClass :'toast-top-right'
        })
      }
    }
    else{
      this.toastr.error('Login Failed','Error!',{
        timeOut:3000,
        progressBar:true,
        positionClass :'toast-top-right'
      })
    }
  }
}
