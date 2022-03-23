import { Component } from "@angular/core";

@Component({
    selector: 'parent-comp',
    template: `
    <div>
        <H1>Parent component</H1>
        <child-comp [parentMsg]="compName" (notify)="onNotify()"></child-comp>
    </div>`
})

export class ParentComponent {
    compName = "parent";

    onNotify() {
        alert('message from child');
    }
}