import { Component } from "@angular/core";

@Component({
    'selector': 'sample',
    'templateUrl': './sample.component.html'
})
export class SampleComponent {
    title = 'angular-practice';
    color = 'red';
    bgColor = '';
    empList = [
      "Chandu",
      "Varam",
      "Thrilokya"
    ];
  
    changeColor() {
      if(this.color == 'red')
        this.color = 'blue';
      else
        this.color = 'red';
    }
}