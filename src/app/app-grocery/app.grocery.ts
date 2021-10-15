import { Component } from '@angular/core';
 
@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html'
})
 
export class GroceryComponent {  
  
  task = "";
  tasks: Array<any> = [];
 
  onClick(){
    this.tasks.push({name: this.task});
  this.task = '';
  }


}