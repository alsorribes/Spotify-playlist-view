import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonSearchbar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.html',
  styleUrls: ['./playlist.css'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonSearchbar,
    IonButton,
    IonIcon,
    IonButtons
]
})
export class PlaylistComponent {
  constructor() {}
}