// ✅ app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { NewUserComponentComponent } from './new-user-component/new-user-component.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'edit', component: EditComponentComponent },
  { path: 'newUser', component: NewUserComponentComponent },
  {path:'reactiveForms',component:ReactiveFormsComponent}
];
