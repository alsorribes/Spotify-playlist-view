import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Playlist } from "./playlist/playlist";

@Component({
  selector: 'app-root',
  imports: [Playlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'spotify-playlist';
}
