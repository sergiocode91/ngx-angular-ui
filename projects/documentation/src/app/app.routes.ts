import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'docs',
    loadComponent: () => import('./docs/docs.component').then(m => m.DocsComponent),
    children: [
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
      { path: 'introduction', loadComponent: () => import('./docs/introduction/introduction.component').then(m => m.IntroductionComponent) },
      { path: 'installation', loadComponent: () => import('./docs/installation/installation.component').then(m => m.InstallationComponent) },
      { path: 'alert', loadComponent: () => import('./docs/alert/alert.component').then(m => m.AlertComponent) },
      { path: 'avatar', loadComponent: () => import('./docs/avatar/avatar.component').then(m => m.AvatarComponent) },
      { path: 'badge', loadComponent: () => import('./docs/badge/badge.component').then(m => m.BadgeComponent) },
      { path: 'breadcrumb', loadComponent: () => import('./docs/breadcrumb/breadcrumb.component').then(m => m.BreadcrumbComponent) },
      { path: 'button', loadComponent: () => import('./docs/button/button.component').then(m => m.ButtonComponent) },
      { path: 'card', loadComponent: () => import('./docs/card/card.component').then(m => m.CardComponent) },
      { path: 'input', loadComponent: () => import('./docs/input/input.component').then(m => m.InputComponent) },
      { path: 'label', loadComponent: () => import('./docs/label/label.component').then(m => m.LabelComponent) },
      { path: 'skeleton', loadComponent: () => import('./docs/skeleton/skeleton.component').then(m => m.SkeletonComponent) },
      { path: 'spinner', loadComponent: () => import('./docs/spinner/spinner.component').then(m => m.SpinnerComponent) },
      { path: 'textarea', loadComponent: () => import('./docs/textarea/textarea.component').then(m => m.TextareaComponent) },      
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
