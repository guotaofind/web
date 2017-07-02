import { Component } from '@angular/core';
import { DecompositionService } from './Decomposition.service';
import { Result } from './submitted/result';

@Component({
  selector: 'app-decomposition',
  templateUrl: './decomposition.component.html',
  providers: [ DecompositionService ],
})
export class DecompositionComponent {

  errorMessage: string;
  number: number;
  result = new Result('');
  submitted = false;

  constructor(
    private decompositionService: DecompositionService
  ) {
  }

  onSubmit(): void {
    this.submitted = true;
    this.decompositionService.create(this.number)
      .subscribe(
        result => this.result = result,
        error =>  this.errorMessage = <any>error);
  }

  onChange() {
    this.submitted = false;
    this.result.result = '';
  }
}
