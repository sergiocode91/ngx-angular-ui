import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from '@components/index';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent
  ],
  templateUrl: './installation.component.html',
  styles: ``
})
export class InstallationComponent {

}
