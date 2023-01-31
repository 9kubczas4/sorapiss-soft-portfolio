import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enhance-material',
  templateUrl: './enhance-material.component.html',
  styleUrls: ['./enhance-material.component.scss'],
})
export class EnhanceMaterialComponent implements OnInit {
  readmeImport = import('./readme.md');

  constructor() {}

  ngOnInit(): void {}
}
