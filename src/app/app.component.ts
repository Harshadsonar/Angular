import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  template: `<section><rooms-user/></section>
  <h1>Hello World from inline template!</h1>
   <p>Angular is Awesome {{title}}</p>`,
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RoomsComponent]
})
export class AppComponent {
  title = 'hotelbookingapp';
}
