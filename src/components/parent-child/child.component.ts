import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'child-comp',
    template: `
    <div>
        <H3>Child component</H3>
        <P>{{parentMsg}}</P>
        <button (click)="notifyParent()">Notify</button>
    </div>`
})

export class ChildComponent {
    @Input() parentMsg!: string;
    @Output() notify = new EventEmitter();

    notifyParent() {
        this.notify.emit("Success");
    }
}