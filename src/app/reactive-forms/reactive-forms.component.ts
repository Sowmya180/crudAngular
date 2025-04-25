import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'] 
})
export class ReactiveFormsComponent {
  name = new FormControl('');
  feedback=new FormControl('');
  updateName() {
    this.name.setValue('sowm')
  }

}
