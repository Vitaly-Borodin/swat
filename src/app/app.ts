import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal("S.W.A.T");

  public changeTitle(): void {
    this.title.set("S.W.A.T - South West Association of Tournaments");
  }
}
