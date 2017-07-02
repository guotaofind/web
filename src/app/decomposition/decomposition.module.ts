import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DecompositionComponent } from './decomposition.component';
import { NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { SubmittedComponent } from './submitted/submitted.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NumericTextBoxModule,
    LabelModule,
    ButtonModule
  ],
  declarations: [ DecompositionComponent, SubmittedComponent ],
  exports: [ DecompositionComponent ]
})
export class DecompositionModule { }
