import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from "./core/header/header";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stylewalk');
}
