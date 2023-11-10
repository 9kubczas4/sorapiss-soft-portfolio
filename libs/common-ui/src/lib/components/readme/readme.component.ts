import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ssp-readme',
  styleUrls: ['./readme.component.scss'],
  templateUrl: 'readme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MarkdownModule],
})
export class ReadmeComponent implements AfterViewInit {
  @Input() readmeImport?: Promise<{ default: string }>;
  readme?: string;

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.loadReadme();
  }

  private loadReadme() {
    if (!this.readmeImport) {
      return;
    }

    this.readmeImport.then((value) => {
      this.readme = value.default;
      this.cdRef.detectChanges();
    });
  }
}
