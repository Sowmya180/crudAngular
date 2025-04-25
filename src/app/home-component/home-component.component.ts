import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-home-component',
  standalone:true,
  imports:[CommonModule,FormsModule,RouterModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  employees = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', salary: "50000", date: '2023-01-01' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', salary: "52000", date: '2023-01-02' },
    { firstName: 'Bob', lastName: 'Brown', email: 'bob@example.com', salary: '48000', date: '2023-01-03' },
    { firstName: 'Alice', lastName: 'Green', email: 'alice@example.com', salary: "91000", date: '2023-01-04' },
    { firstName: 'Mark', lastName: 'White', email: 'mark@example.com', salary: "53000", date: '2023-01-05' },
    { firstName: 'Linda', lastName: 'Black', email: 'linda@example.com', salary: "55000", date: '2023-01-06' },
    { firstName: 'Tom', lastName: 'Harris', email: 'tom@example.com', salary: "47000", date: '2023-01-07' },
    { firstName: 'Emma', lastName: 'Wilson', email: 'emma@example.com', salary: "54000", date: '2023-01-08' },
    { firstName: 'Luke', lastName: 'Scott', email: 'luke@example.com', salary: "46000", date: '2023-01-09' },
    { firstName: 'Olivia', lastName: 'Brown', email: 'olivia@example.com', salary: "58000", date: '2023-01-10' },
    { firstName: 'Nathan', lastName: 'Lee', email: 'nathan@example.com', salary: "57000", date: '2023-01-11' },
    { firstName: 'Sophia', lastName: 'Clark', email: 'sophia@example.com', salary: "56000", date: '2023-01-12' },
    { firstName: 'James', lastName: 'Hall', email: 'james@example.com', salary: "59000", date: '2023-01-13' },
    { firstName: 'Grace', lastName: 'Lewis', email: 'grace@example.com', salary: "60000", date: '2023-01-14' },
    { firstName: 'Daniel', lastName: 'Young', email: 'daniel@example.com', salary: "61000", date: '2023-01-15' },
    { firstName: 'Chloe', lastName: 'Walker', email: 'chloe@example.com', salary: "62000", date: '2023-01-16' },
    { firstName: 'Henry', lastName: 'King', email: 'henry@example.com', salary: "63000", date: '2023-01-17' },
    { firstName: 'Ella', lastName: 'Wright', email: 'ella@example.com', salary: "64000", date: '2023-01-18' },
    { firstName: 'Mason', lastName: 'Hill', email: 'mason@example.com', salary: "65000", date: '2023-01-19' },
    { firstName: 'Lily', lastName: 'Adams', email: 'lily@example.com', salary: "66000", date: '2023-01-20' },
    { firstName: 'James', lastName: 'Hall', email: 'james@example.com', salary: "59000", date: '2023-01-13' },
    { firstName: 'Grace', lastName: 'Lewis', email: 'grace@example.com', salary: "60000", date: '2023-01-14' },
    { firstName: 'Daniel', lastName: 'Young', email: 'daniel@example.com', salary: "61000", date: '2023-01-15' },
    { firstName: 'Chloe', lastName: 'Walker', email: 'chloe@example.com', salary: "62000", date: '2023-01-16' },
    { firstName: 'Henry', lastName: 'King', email: 'henry@example.com', salary: "63000", date: '2023-01-17' },
    { firstName: 'Ella', lastName: 'Wright', email: 'ella@example.com', salary: "64000", date: '2023-01-18' },
    { firstName: 'Mason', lastName: 'Hill', email: 'mason@example.com', salary: "65000", date: '2023-01-19' },
    { firstName: 'Lily', lastName: 'Adams', email: 'lily@example.com', salary: "66000", date: '2023-01-20' },
  ];
  
  currentPage = 1
  itemsPerPage = 8

  totalPages():number {
    return Math.ceil(this.employees.length/this.itemsPerPage)
  }

  changePage(page:number){
    this.currentPage = page
  }

 get paginatedEmp() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.employees.slice(startIndex,startIndex+this.itemsPerPage)
  }

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { 
      newUser?: any, 
      updatedUser?: any, 
      editIndex?: number 
    };
    
    if (state?.newUser) {
      this.employees.push(state.newUser);
    } else if (state?.updatedUser && state.editIndex !== undefined) {
      this.employees[state.editIndex] = state.updatedUser;
    }
  }

  onDeleteClick = (empToDelete:any) => {
    const isConfirmed = confirm(`Are you sure you wanna to delete ${empToDelete.firstName} ${empToDelete.lastName}?`)
    if(isConfirmed){
      const index = this.employees.indexOf(empToDelete)
      if(index > -1) {
        this.employees.splice(index,1)
          const totalPages = this.totalPages();
      if (this.currentPage > totalPages) {
        this.currentPage = totalPages;
      }
      }
    }
  }

  onClick = () => {
    this.router.navigate(['/newUser']);
  }
  onClickEdit = (emp: any, index: number) => {
    // Calculate the actual index in the full array based on pagination
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const actualIndex = startIndex + index;
    
    this.router.navigate(['/newUser'], {
      state: { 
        editUser: emp,
        editIndex: actualIndex 
      }
    });
  
  }}
