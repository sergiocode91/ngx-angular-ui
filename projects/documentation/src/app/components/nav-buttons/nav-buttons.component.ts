import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from 'ngx-angular-ui';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule,
    HtmlButtonDirective
  ],
  templateUrl: './nav-buttons.component.html',
  styles: ``
})
export class NavButtonsComponent {
  @Input() labelLeft: string = '';
  @Input() labelRight: string = '';
  @Input() routerLeft: string = '';
  @Input() routerRight: string = '';
  @Input() positionLeft: boolean = false;
  @Input() positionRight: boolean = false;
}
