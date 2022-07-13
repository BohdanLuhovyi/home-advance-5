import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public taskInput!: string;
  public pTaskArr: any[] = [];

  addTask(): void{
    let newTask = {
      newTask: this.taskInput, 
      doneCheck: false, 
    }
    this.pTaskArr.push(newTask);
    this.taskInput = ''
  }

  // getEdit(data: string): void{
  //   this.saveInput = data
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
