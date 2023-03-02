import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LocalStorageProvider, LOCAL_STORAGE, LOCATION, LocationProvider, WINDOW, WindowProvider } from '@sorapiss-soft-portfolio/utils';

const LOCAL_SAMPLE_STORAGE_KEY = 'LOCAL_SAMPLE_STORAGE_KEY';

@Component({
  selector: 'ssp-sample-providers',
  templateUrl: './sample-providers.component.html',
  styleUrls: ['./sample-providers.component.scss'],
  providers: [LocalStorageProvider, LocationProvider, WindowProvider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleProvidersComponent implements OnInit {
  @ViewChild('localStorageValue') localStorageValue?: ElementRef;

  localStorageSavedValue?: string;
  windowHistoryState?: string;
  readmeImport = import('raw-loader!./readme.md');

  constructor(
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
    @Inject(LOCATION) private readonly location: Location,
    @Inject(WINDOW) private readonly window: Window,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadLocalStorage();
    this.cdRef.detectChanges();
  }

  loadLocalStorage(): void {
    this.localStorageSavedValue = this.localStorage.getItem(LOCAL_SAMPLE_STORAGE_KEY) ?? '';
  }

  writeToLocalStorage(): void {
    this.localStorage.setItem(LOCAL_SAMPLE_STORAGE_KEY, this.localStorageValue?.nativeElement.value);
  }

  displayWindowHistoryState(): void {
    this.windowHistoryState = this.window.history.state;
  }

  reload(): void {
    this.location.reload();
  }
}
