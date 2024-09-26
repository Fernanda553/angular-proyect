import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
 public title: string = 'angular-proyect';
 public counter: number = 10

 increaseBy(value: number):void {
  this.counter += value
 }

 resetCounter():void {
  this.counter = 10
 }
}
