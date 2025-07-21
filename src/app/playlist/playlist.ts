import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonFooter, IonButton, IonIcon, IonRange
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.html',
  styleUrls: ['./playlist.css'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle,
    IonContent, IonFooter, IonButton,
    IonIcon, IonRange
  ]
})
export class PlaylistComponent {
  constructor() {}
}