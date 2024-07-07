import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  LinksContentComponent,
  NavButtonsComponent,
} from '@components/index';
import { LucideAngularModule } from 'lucide-angular';
import { LinksContent } from '../../models';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    LucideAngularModule,
    NavButtonsComponent,
    LinksContentComponent,
  ],
  templateUrl: './introduction.component.html',
  styles: ``,
})
export class IntroductionComponent {
  public linksContent: LinksContent[] = [
    { title: 'What is AngularUI?', link: '#what-is-angularui' },
    { title: 'Contributing', link: '#contributing' },
    { title: 'Credits', link: '#credits' },
  ];
}
