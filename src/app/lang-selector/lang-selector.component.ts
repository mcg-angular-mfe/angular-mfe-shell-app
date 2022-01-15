import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {

  lang!: string;
  
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'pt';
  }

  changeLang($event: any) {
    const lang = $event.target.value;
    console.log({ lang });

    localStorage.setItem('lang', lang);
    this.translateService.use(lang || 'pt');

    const event = new CustomEvent('changeLang', { detail: lang });
    document.dispatchEvent(event);
  }

}
