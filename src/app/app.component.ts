import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  display : string = 'recipes';

  onRecipesClick() {
    this.display = 'recipes';
  }

  onShoppingListClick() {
    this.display = 'shopping-list'
  }

}
