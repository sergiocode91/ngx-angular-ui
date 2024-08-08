import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HeroComponent } from '@components/index';
import { HtmlBadgeDirective, HtmlButtonDirective, HtmlSkeletonDirective } from 'ngx-angular-ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    HeroComponent,
    HtmlButtonDirective,
    HtmlSkeletonDirective,
    HtmlBadgeDirective
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  public components = [
    { title: 'Alert', link: '/docs/alert', description: 'Displays a notice that captures the users attention.', icon: 'TriangleAlert' },
    { title: 'Avatar', link: '/docs/avatar', description: 'Shows a user representation with an image, including a fallback option.', icon: 'CircleUser' },
    { title: 'Badge', link: '/docs/badge', description: 'Renders a badge-like element for highlighting important information.', icon: 'MessageSquareDot' },
    { title: 'Button', link: '/docs/button', description: 'Allows users to take actions with a single tap.', icon: 'MousePointerClick' },
    { title: 'Card', link: '/docs/card', description: 'Presents a card structure with a header, content area, and footer.', icon: 'Captions' },
    { title: 'Input', link: '/docs/input', description: 'Renders a form input element for user data entry.', icon: 'TextCursorInput' },
    { title: 'Label', link: '/docs/label', description: 'Provides a textual label for associated input elements.', icon: 'WholeWord' },
    { title: 'Skeleton', link: '/docs/skeleton', description: 'Use to show a placeholder while content is loading.', icon: 'LayoutTemplate' },
    { title: 'Spinner', link: '/docs/spinner', description: 'Indicates an indefinite wait time or the duration of a process.', icon: 'LoaderCircle' },
    // { title: 'Textarea', link: '/docs/textarea', description: 'Renders a multi-line input field for user text entry.', icon: 'textarea' },
  ];
}
