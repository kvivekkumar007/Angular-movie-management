import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) {
    this.userservice.setUserLogOut();
   }

  ngOnInit() {
  }
  login(e){
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username,password);

    if(username == "admin" && password == "admin"){
      this.userservice.setUserLoggedIn();
      this.router.navigate(['welcome']);
    } else(
      window.alert("Invalid Login Credentials"),
      e.target.elements[0].value = "",
      e.target.elements[1].value = ""
    )

  }

}
