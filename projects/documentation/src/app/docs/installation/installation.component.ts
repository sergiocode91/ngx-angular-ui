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
    HighlightCodeComponent,
  ],
  templateUrl: './installation.component.html',
  styles: ``,
})
export class InstallationComponent {
  public linksContent: LinksContent[] = [
    { title: 'Requirements', link: '#requirements' },
    { title: 'Optional requirements', link: '#optional-requirements' },
    { title: 'Installation guide', link: '#installation-guide' },
    { title: 'Angular UI', link: '#ngx-angular-ui', isSubmenu: true },
    { title: 'Tailwind CSS', link: '#tailwind-css', isSubmenu: true },

  ];

  public code1 = `
  npm install ngx-angular-ui@latest
  `;

  public code2 = `
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  `;

  public code3 = `
  module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  `;

  public code4 = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  `;
}
