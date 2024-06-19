import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingComponent } from '@components/index';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [HeadingComponent, LucideAngularModule, CommonModule],
  templateUrl: './introduction.component.html',
  styles: ``
})
export class IntroductionComponent {
  public activeIndex: number = 0;
  public colors: string[] = ['#52525b', '#3b82f6', '#22c55e', '#6d28d9', '#ea580c', '#dc2626'];

  setActive(index: number) {
    this.activeIndex = index;
  }
}
