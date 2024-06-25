import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingComponent } from '@components/index';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

type ColorType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [HeadingComponent, LucideAngularModule, CommonModule, HtmlButtonDirective],
  templateUrl: './introduction.component.html',
  styles: ``
})
export class IntroductionComponent {
  public activeIndex: number = 0;
  public colors: { value: string, name: ColorType }[] = [
    { value: '#52525b', name: 'default' },
    { value: '#3b82f6', name: 'primary' },
    { value: '#27272a', name: 'secondary' },
    { value: '#22c55e', name: 'success' },
    { value: '#ea580c', name: 'warning' },
    { value: '#dc2626', name: 'danger' }
  ];
  activeColor: { value: string, name: ColorType } = this.colors[0];

  setActive(index: number) {
    this.activeIndex = index;
    this.activeColor = this.colors[index];
  }
}
