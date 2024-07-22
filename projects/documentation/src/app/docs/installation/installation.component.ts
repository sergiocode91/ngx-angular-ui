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
    { title: 'Optional Requirements', link: '#optional-requirements' },
    { title: 'Installation Guide', link: '#installation-guide' },
    { title: 'Install Library', link: '#step-1', isSubmenu: true },
    { title: 'Install Tailwind CSS', link: '#step-2', isSubmenu: true },
    { title: 'Include @tailwind', link: '#step-3', isSubmenu: true },
    { title: 'Installation Optional', link: '#installation-optional' },
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
    darkMode: 'class',
    content: [
      "./src/**/*.{html,ts}",
      "./node_modules/ngx-angular-ui/**/*.{html,ts,js,mjs}"
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

  public code5 = `
  npm install @fontsource/geist-sans
  `;

  public code6 = `
  @import '@fontsource/geist-sans/300.css';
  @import '@fontsource/geist-sans/400.css';
  @import '@fontsource/geist-sans/500.css';
  @import '@fontsource/geist-sans/600.css';
  @import '@fontsource/geist-sans/700.css';
  @import '@fontsource/geist-sans/800.css';
  @import '@fontsource/geist-sans/900.css';
  `;

  public code7 = `
  body {
    font-family: 'Geist Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  `;
}
