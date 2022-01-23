import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  loading = false;

  constructor(
    private translateService: TranslateService,
    private router: Router,
  ) {
    // i18n init
    this.translateService.setDefaultLang('pt');
    this.translateService.use('pt');

    this.loadingHandler();
  }

  loadingHandler() {
    this.router.events
    .subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          // setTimeout(() => this.loading = false, 1000); // just a test
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
