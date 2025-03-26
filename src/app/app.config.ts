import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideClientHydration(),provideRouter(routes), provideAnimationsAsync()]
};
