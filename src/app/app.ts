import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal("S.W.A.T");

  public ngOnInit(): void {
    this.changeTitle();
  }

  public changeTitle(): void {
    this.title.set("S.W.A.T - South West Association of Tournaments");
  }
}
