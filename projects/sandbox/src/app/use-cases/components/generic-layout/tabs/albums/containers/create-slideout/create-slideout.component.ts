import { SlideoutService } from './../../../../services/slideout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-slideout',
  templateUrl: './create-slideout.component.html',
  styleUrls: ['./create-slideout.component.scss'],
  standalone: true,
})
export class CreateSlideoutComponent implements OnInit {
  constructor(private readonly slideoutService: SlideoutService) {}

  ngOnInit(): void {
    this.slideoutService.openSlideout();
  }
}
