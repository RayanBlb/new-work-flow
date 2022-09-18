import { Component, OnInit } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  authenticateLogin() {
    const keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'Angular-web',
      clientId: 'angular-web-client'
    });

    keycloak.init({ onLoad: 'login-required', flow: 'standard', redirectUri: window.location.origin + "/success" }).then((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.log("Authenticated");
      }
      sessionStorage.setItem("authKey", keycloak.token!);
    }).catch((error) => {
      console.error("Authenticated failed due to \n" + error);
    });
  }

}
