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
}
