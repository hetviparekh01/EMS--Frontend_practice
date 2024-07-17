import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  selectedFile!:File
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localstorageService: LocalstorageService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required])],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$|^$|^ $`
          ),
        ]),
      ],
      password: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
      profileImage: ['', Validators.compose([Validators.required])],
    });
  }

  onSelectedFile(event:any){
    this.selectedFile=event.target.files[0]
  }
  onSubmit() {
    if (this.signupForm.valid) {
      const formData=new FormData()
      formData.append('userName',this.signupForm.get('userName')?.value)
      formData.append('email', this.signupForm.get('email')?.value);
      formData.append('password', this.signupForm.get('password')?.value);
      formData.append('role', this.signupForm.get('role')?.value);
      formData.append('profileImage', this.selectedFile);

      this.authService.signup(formData).subscribe({
        next: (response: any) => {
          Swal.fire({
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
        },
      });
      this.signupForm.reset();
    }
  }
}
