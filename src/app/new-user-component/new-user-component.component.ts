import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-user-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './new-user-component.component.html',
  styleUrl: './new-user-component.component.css'
})
export class NewUserComponentComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: ''
  };

  isEditMode = false;
  editIndex: number | null | undefined = null;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { editUser?: any, editIndex?: number };
    
    if (state?.editUser) {
      this.user = { ...state.editUser };
      this.editIndex = state.editIndex;
      this.isEditMode = true;
    }
  }

  onSubmit() {  
    if (this.isEditMode && this.editIndex !== null) {
      this.router.navigate(['/'], {
        state: {
          updatedUser: this.user,
          editIndex: this.editIndex
        }
      });
    } else {
      this.router.navigate(['/'], {
        state: { newUser: this.user }
      });
    }
  
    alert(this.isEditMode ? 'Successfully Updated!' : 'Successfully Added!');
  }
}