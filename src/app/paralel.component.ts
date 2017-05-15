import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'paralel',
    template: `<button (click)="onSubmit()"> Submit </button>`
})
export class ParalelComponent {
   @Output() myevent: EventEmitter<any>;
    constructor() {
        this.myevent = new EventEmitter();
    }
    onSubmit(): void {
        this.myevent.emit();
  }
}