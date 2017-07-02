import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Result } from './result';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html'
})
export class SubmittedComponent {
  @Input()  result: Result;
  @Input()  submitted = false;
}
