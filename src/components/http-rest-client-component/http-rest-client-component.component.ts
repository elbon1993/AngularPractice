import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpRestClientService } from './http-rest-client.service';

@Component({
  selector: 'app-http-rest-client-component',
  templateUrl: './http-rest-client-component.component.html',
  styleUrls: ['./http-rest-client-component.component.css'],
  providers: [HttpRestClientService]
})
export class HttpRestClientComponentComponent implements OnInit {

  userForm: any;
  users: any;

  getUsersObs: Observable<Object>;
  constructor(private httpService: HttpRestClientService, private fb: FormBuilder) {
    this.getUsersObs = this.httpService.getUsers();
  }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  createUser() {
    this.httpService.createUser(null).subscribe((data) => {
      console.log(data);
    })
  }

  getUsers() {
    this.getUsersObs.subscribe((users)=> {
      this.users = users;
    });
  }

  getPosts() {
    this.httpService.getPosts().subscribe((data)=> {
      console.log(data);
    });
  }

  onSubmit() {
    this.httpService.createUser(this.userForm.value).subscribe((data) => {
      this.getUsers();
      console.log(data);
    })
  }

}
