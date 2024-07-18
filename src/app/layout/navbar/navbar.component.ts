import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name!: string;
  email!: string;
  signupForm!: FormGroup;
  userData: any = this.localstorageService.getUserData();
  temporaryUrl!: string;
  selectedFile!: File;
  constructor(private localstorageService: LocalstorageService, private userService: UserService, private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName: [this.localstorageService.getUserData().userName, Validators.required]
    })
    this.name = this.localstorageService.getUserData().userName as string;
    this.email = this.localstorageService.getUserData().email as string;

  }
  onSelectedFile(event: any) {
  }
  loadFile(event: any, previewImage: HTMLImageElement) {
    this.selectedFile = event?.target.files[0]

    // this.onSelectedFile(event)
    const reader = new FileReader();
    reader.onload = () => {
      previewImage.src = reader.result as string
      this.temporaryUrl = previewImage.src
    }
    reader.readAsDataURL(this.selectedFile)
    // if (this.selectedFile) {
    // }
  }
  logout() {
    this.localstorageService.clearLocalstorage();
    this.router.navigate(['/auth/login'])
  }
}
