import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  newServer: any;
  filterString = '';
  appStatus = '';

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      this.appStatus = 'Stable';
    }, 2000)
  })
  
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(14, 5, 2019)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(4, 1, 2014)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(9, 4, 2020)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(8, 5, 2014)
    }
  ]

  onAddServer() {
    this.newServer = {
      instanceType: 'small',
      name: 'New Server',
      status: 'offline',
      started: new Date(9, 3, 2017)
    }
    this.servers.push(this.newServer);
  }
}
