import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  signupForm!: FormGroup;
  selectedFile!: File;
  userId=this.activatedRoute.snapshot.paramMap.get('id') as string;
  isSubmit:boolean=true;
  isUpdate:boolean=false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private userService:UserService
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
    if(this.userId){
      this.isSubmit  = false;
      this.isUpdate=true;
      this.getUserById();
    }
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe({
      next: (response: any) => {
        if(response.status){
          this.signupForm.patchValue({
            userName: response.data.userName,
            email: response.data.email,
            role: response.data.role,
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          });
        }
      },
      error:(error)=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      }
    })
  }
  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0]
  }
  onSubmit() {
    if (this.signupForm.valid) {
      const formData = new FormData()
      formData.append('userName', this.signupForm.get('userName')?.value)
      formData.append('email', this.signupForm.get('email')?.value);
      formData.append('password', this.signupForm.get('password')?.value);
      formData.append('role', this.signupForm.get('role')?.value);
      formData.append('profileImage', this.selectedFile);
      if(this.isSubmit){
        this.authService.signup(formData).subscribe({
          next: (response: any) => {
            if (response.status) {
              Swal.fire({
                icon: 'success',
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.message,
              });
            }
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
            });
          },
          complete:()=>{
            this.signupForm.reset();
            
          }
        }); 
      }else{
          this.userService.updateUser(this.userId,formData).subscribe({
            next: (response: any) => {
              if (response.status) {
                Swal.fire({
                  icon: 'success',
                  title: response.message,
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: response.message,
                });
              }
            },
            error: (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
              });
            },
            complete: () => {
              this.signupForm.reset();
            }
          })
      }
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please fill all the value",
      });
    }
  }
}
