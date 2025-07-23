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
  playSkipBackOutline, 
  playCircle, 
  playSkipForwardOutline,
  textOutline, 
  shuffleOutline,
  repeatOutline,
  volumeLowOutline, 
  headsetOutline,
  addOutline,
  ellipsisHorizontal,
  caretForwardOutline,
  listOutline,
  arrowDownCircleOutline,
  timeOutline,
  play} from 'ionicons/icons';

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
  'shuffle-outline': shuffleOutline,
  'play-skip-back-outline': playSkipBackOutline,
  'play-circle': playCircle,
  'play-skip-forward-outline': playSkipForwardOutline,
  'repeat-outline': repeatOutline,
  'volume-low-outline': volumeLowOutline,
  'text-outline': textOutline,
  'headset-outline': headsetOutline,
  'add-outline': addOutline,
  'ellipsis-horizontal': ellipsisHorizontal,
  'caret-forward-outline': caretForwardOutline,
  'list-outline': listOutline,
  'arrow-down-circle-outline': arrowDownCircleOutline,
  'time-outline': timeOutline,
  'play': play
});