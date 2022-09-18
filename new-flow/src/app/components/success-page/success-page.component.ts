import { Component, OnInit } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // const keycloak = new Keycloak({
      //   url: 'http://localhost:8080',
      //   realm: 'Angular-web',
      //   clientId: 'angular-web-client'
      // });

      // keycloak.init({ }).then((auth) => {
      //   if (!auth) {
      //     window.location.reload();
      //   } else {
      //     console.log("Authenticated");
      //   }
      // }).catch((error) => {
      //   console.error("Authenticated failed due to \n" + error);
      // });
  }

}
