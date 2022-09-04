import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-readme',
  styleUrls: ['./readme.component.scss'],
  templateUrl: 'readme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadmeComponent implements AfterViewInit {
  @Input() readmeImport?: Promise<any>;
  readme?: string;

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.loadReadme();
  }

  private loadReadme() {
    if (!this.readmeImport) {
      return;
    }

    this.readmeImport.then(value => {
      this.readme = value.default;
      this.cdRef.detectChanges();
    });
  }
}
