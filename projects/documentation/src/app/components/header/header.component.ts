import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { DarkmodeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, HtmlButtonDirective],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  _darkModeService: DarkmodeService = inject(DarkmodeService);

  toggleDarkmode() {
    this._darkModeService.toggleDarkmode();
  }
}
