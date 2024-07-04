import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingComponent, NavButtonsComponent } from '@components/index';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    NavButtonsComponent
  ],
  templateUrl: './installation.component.html',
  styles: ``
})
export class InstallationComponent {

}
