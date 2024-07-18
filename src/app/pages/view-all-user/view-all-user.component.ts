import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { IUser } from 'src/app/core/interfaces/IUser';
import { UserService } from 'src/app/core/services/user.service';
import { CustomRendererEditDeleteComponent } from 'src/app/shared/custom-renderer-edit-delete/custom-renderer-edit-delete.component';
import { CustomRendererComponent } from 'src/app/shared/custom-renderer/custom-renderer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.scss']
})
export class ViewAllUserComponent implements OnInit {
  userData!: IUser[];
  constructor(private userService: UserService, private router: Router) { }
  colDefs: ColDef[] = [
    {
      field: "profileImage",
      headerName: 'Profile Image', flex: 1, cellRenderer: (params: any) => {
        return `<img src="http://localhost:3000/public/${params.value}" class="rounded-circle" style="width : 3rem; height: 3rem">`
      }
    },
    { headerName: 'User Name', field: 'userName', flex: 2 },
    { headerName: 'Email', field: 'email', flex: 2 },
    { headerName: 'role', field: 'role', flex: 2 },
    {
      headerName: 'Action',
      field: '',
      flex: 2,
      cellRenderer: CustomRendererEditDeleteComponent,
      cellRendererParams: {
        editBtn: (id: string) => this.editBtn(id),
        deleteBtn: (id: string) => this.deleteBtn(id)
      },
    },
  ];
  ngOnInit(): void {
    this.getAllUser()
  }
  deleteBtn(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id)
          .subscribe({
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
                text: error.error.message,
              });
            },
            complete: () => {
              this.getAllUser()
            }
          });
      }
    });
  }
  editBtn(id: string) {
    this.router.navigate([`/addUser/${id}`])
  }
  getAllUser() {
    this.userService.getAllUsers().subscribe({
      next: (response: any) => {
        if(response.status){
          this.userData = response.data
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          });
        }
      },
      error:(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      }
    })
  }
}
