import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import {
  LucideAngularModule,
  Files,
  Sun,
  Copy,
  Check,
  Moon,
  Instagram,
  Github,
  Trash,
  Bell,
  Rss,
  Megaphone,
  Ban,
  TriangleAlert,
  CircleCheck,
  Info,
  X,
  LoaderCircle,
  Bug,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Shield,
  EllipsisVertical,
  Menu,
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Files,
        Sun,
        Copy,
        Check,
        Moon,
        Instagram,
        Github,
        Trash,
        Bell,
        Rss,
        Megaphone,
        Ban,
        TriangleAlert,
        CircleCheck,
        Info,
        X,
        LoaderCircle,
        Bug,
        ChevronLeft,
        ChevronRight,
        ArrowUpRight,
        Shield,
        EllipsisVertical,
        Menu,
      })
    ),
  ]
};
