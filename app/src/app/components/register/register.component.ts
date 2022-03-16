import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: new String,
      email: [new String, Validators.email],
      password: new String,
    })
  }


  ngOnInit(): void {
  }

  register(): void {
    this.authService.register(this.registerForm.value)
      .subscribe({
        next: (data) => console.log(data.token),
        error: (error) => console.error(error),
        complete: () => console.info('complete')
      })
  }




}

