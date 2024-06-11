import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaxLenghtDirective } from '../../directives/app-max-lenght.directive'
import { NumberFormatPipe } from "../../pipes/number-format.pipe";

@Component({
  selector: 'app-my-component',
  standalone: true,
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss',
  imports: [CommonModule, MaxLenghtDirective, NumberFormatPipe]
})
export class MyComponentComponent {
  public isUserLoggedIn = true;
  public userName = 'John';
  public viewMode = 'map'

  items = [
    { id: 1, name: 'Елемент 1' },
    { id: 2, name: 'Елемент 2' },
    { id: 3, name: 'Елемент 3' },
    { id: 4, name: 'Елемент 4' }
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }
}
