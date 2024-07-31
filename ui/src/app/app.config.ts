import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import {provideAuth0} from "@auth0/auth0-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      domain: 'larkalert.auth0.com',
      clientId: 'ICic00CoRYQ3D99fLQlbBK90LptDVRb5',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideRouter(routes,
        withRouterConfig({
          onSameUrlNavigation: 'reload'
        }),
        withInMemoryScrolling({
          scrollPositionRestoration: 'top',
          anchorScrolling: 'enabled'
        }),
        withEnabledBlockingInitialNavigation(),
        withViewTransitions(),
        withHashLocation()
    ),
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    provideAnimations()
  ]
};
