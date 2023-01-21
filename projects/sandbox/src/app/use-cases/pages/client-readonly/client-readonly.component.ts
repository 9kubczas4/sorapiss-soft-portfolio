import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-readonly',
  templateUrl: './client-readonly.component.html',
  styleUrls: ['./client-readonly.component.scss'],
})
export class ClientReadonlyComponent implements OnInit {
  readmeImport = import('./readme.md');

  constructor() {}

  ngOnInit(): void {}
}
