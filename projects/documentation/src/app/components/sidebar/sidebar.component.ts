import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Navigation {
  title: string;
  links: Link[];
}

interface Link {
  title: string;
  routerLink: string;
  isSoon: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})

export class SidebarComponent {
  @Input() navigations: Navigation[] = [];
}
