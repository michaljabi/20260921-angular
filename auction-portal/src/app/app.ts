import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, MainMenuComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected hiddenText = 'Jestem widoczny po najechaniu';
}
