import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  NavButtonsComponent,
} from '@components/index';
import { LinksContent } from '../../models';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    NavButtonsComponent,
    LinksContentComponent,
    LucideAngularModule,
    HighlightCodeComponent
  ],
  templateUrl: './installation.component.html',
  styles: ``,
})
export class InstallationComponent {
  public linksContent: LinksContent[] = [
    { title: 'Requirements', link: '#requirements' },
    { title: 'Optional requirements', link: '#optional-requirements' },
    { title: 'Installation guide', link: '#installation-guide' },
  ];

  public code1 = `
  npm install @angular-ui/core
  `;

  public code2 = `
  module.exports = {
    darkMode: 'class',
    content: [
      "./projects/**/*.{html,ts}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  `;
}
