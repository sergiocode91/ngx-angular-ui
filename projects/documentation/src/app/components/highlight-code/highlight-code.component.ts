import { Component, Input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from 'ngx-angular-ui';

@Component({
  selector: 'app-highlight-code',
  standalone: true,
  imports: [HighlightModule, HtmlButtonDirective, LucideAngularModule],
  templateUrl: './highlight-code.component.html',
  styles: ``
})
export class HighlightCodeComponent {
  @Input() code: string = '';
  @Input() language: string = '';

  public copyIcon = 'Copy';
  
  handleCopyCode() {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copyIcon = 'Check';

      setTimeout(() => {
        this.copyIcon = 'Copy';
      }, 1000);
    }).catch((err) => {
      console.error('Error copying code:', err);
    });
  }
}
