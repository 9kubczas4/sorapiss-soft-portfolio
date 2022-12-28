import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-edit-slideout',
  templateUrl: './edit-slideout.component.html',
  styleUrls: ['./edit-slideout.component.scss'],
  standalone: true,
  imports: [MatSidenavModule],
})
export class EditSlideoutComponent implements AfterViewInit {
  @ViewChild(MatDrawerContainer) private drawerContainer?: MatDrawerContainer;

  ngAfterViewInit(): void {
    this.drawerContainer?.open();
  }
}
