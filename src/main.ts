import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { addIcons } from 'ionicons';
import { home, 
  homeOutline, 
  searchOutline, 
  micOutline, 
  notificationsOutline, 
  downloadOutline, 
  chevronDownOutline, 
  shuffle, 
  playSkipBackOutline, 
  playCircle, 
  playSkipForwardOutline, 
  repeat, 
  volumeLow } from 'ionicons/icons';

bootstrapApplication(App, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
  ],
})

addIcons({
  'home': home,
  'home-outline': homeOutline,
  'search-outline': searchOutline,
  'mic-outline': micOutline,
  'notifications-outline': notificationsOutline,
  'download-outline': downloadOutline,
  'chevron-down-outline': chevronDownOutline,
  'shuffle': shuffle,
  'play-skip-back-outline': playSkipBackOutline,
  'play-circle': playCircle,
  'play-skip-forward-outline': playSkipForwardOutline,
  'repeat': repeat,
  'volume-low': volumeLow,
});