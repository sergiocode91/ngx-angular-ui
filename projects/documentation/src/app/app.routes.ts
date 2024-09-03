import { Routes } from '@angular/router';

const baseTitle = 'AngularUI - Beautiful, customizable, accessible components with Tailwind CSS and Angular';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./docs/docs.component').then((m) => m.DocsComponent),
    children: [
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
      {
        path: 'introduction',
        title: 'Introduction' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/introduction/introduction.component').then(
            (m) => m.IntroductionComponent
          ),
      },
      {
        path: 'installation',
        title: 'Installation' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/installation/installation.component').then(
            (m) => m.InstallationComponent
          ),
      },
      {
        path: 'alert',
        title: 'Alert' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/alert/alert.component').then((m) => m.AlertComponent),
      },
      {
        path: 'alert-dialog',
        title: 'Alert Dialog' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/alert-dialog/alert-dialog.component').then((m) => m.AlertDialogComponent),
      },
      {
        path: 'avatar',
        title: 'Avatar' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/avatar/avatar.component').then(
            (m) => m.AvatarComponent
          ),
      },
      {
        path: 'badge',
        title: 'Badge' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/badge/badge.component').then((m) => m.BadgeComponent),
      },
      {
        path: 'button',
        title: 'Button' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/button/button.component').then(
            (m) => m.ButtonComponent
          ),
      },
      {
        path: 'card',
        title: 'Card' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/card/card.component').then((m) => m.CardComponent),
      },
      {
        path: 'dialog',
        title: 'Dialog' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/dialog/dialog.component').then((m) => m.DialogComponent),
      },
      {
        path: 'input',
        title: 'Input' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/input/input.component').then((m) => m.InputComponent),
      },
      {
        path: 'label',
        title: 'Label' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/label/label.component').then((m) => m.LabelComponent),
      },
      {
        path: 'progress',
        title: 'Progress' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/progress/progress.component').then(
            (m) => m.ProgressComponent
          ),
      },
      {
        path: 'select',
        title: 'Select' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/select/select.component').then(
            (m) => m.SelectComponent
          ),
      },
      {
        path: 'skeleton',
        title: 'Skeleton' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/skeleton/skeleton.component').then(
            (m) => m.SkeletonComponent
          ),
      },
      {
        path: 'spinner',
        title: 'Spinner' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/spinner/spinner.component').then(
            (m) => m.SpinnerComponent
          ),
      },
      {
        path: 'switch',
        title: 'Switch' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/switch/switch.component').then(
            (m) => m.SwitchComponent
          ),
      },
      {
        path: 'textarea',
        title: 'Textarea' + ' | ' + baseTitle,
        loadComponent: () =>
          import('./docs/textarea/textarea.component').then(
            (m) => m.TextareaComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
