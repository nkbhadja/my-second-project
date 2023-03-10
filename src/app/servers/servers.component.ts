import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreate = false;
  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true;
      }, 2000);
  }
  ngOnInit() {

  }
  onCreateServer() {
    this.serverCreate = true;
    this.serverCreationStatus = 'server created  name of server: ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
