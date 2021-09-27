import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// provera reusable komponente

@Component({
  selector: 'uname',
  template: `
  <label><b>{{label_n}}</b></label>
  `,
  styleUrls: ['./app.component.css'],
})
export class FieldComponent {
  label_n = 'Username'; // promenljiva za labele formi.
}
