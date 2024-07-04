import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from '@components/index';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent, 
    LucideAngularModule, 
  ],
  templateUrl: './introduction.component.html',
  styles: ``
})
export class IntroductionComponent {
}
